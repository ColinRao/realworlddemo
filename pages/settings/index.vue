<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input class="form-control" v-model="form.image" type="text" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="form.username" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg" v-model="form.bio" rows="8" placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="form.email" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="form.password" type="password" placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="updateSetting">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr>
          <button class="btn btn-outline-danger" @click="logout">
            Or click here to logout.
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getUser, updateUser } from '@/api/user';

// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined;

export default {
    middleware: 'authenticated',
    name: 'SettingsIndex',
    computed: {
        ...mapState(['user']),
    },
    data() {
        return {
            form: {
                username: '',
                email: '',
                bio: '',
                image: '',
                password: '',
            },
        };
    },
    mounted() {
        this.getUser();
    },
    methods: {
        logout() {
            this.$store.commit('setUser', null);
            // 跳转到首页
            this.$router.redirect('/');
        },

        async getUser() {
            try {
                const { data } = await getUser();
                // console.log('getUser', data);
                if (data && data.user) {
                    this.form.username = data.user.username;
                    this.form.email = data.user.email;
                }
            } catch (err) {
                console.log('请求失败', err);
                this.errors = err.response.data.errors;
            }
        },

        async updateSetting() {
            try {
                const { data } = await updateUser({ user: { ...this.form } });
                console.log('updateSetting', data);
                if (data && data.user) {
                    // TODO: 保存用户的登录状态
                    this.$store.commit('setUser', data.user);

                    // 为了防止刷新页面数据丢失，我们需要把数据持久化
                    Cookie.set('user', data.user);

                    // 跳转到首页
                    this.$router.push('/');
                }
            } catch (err) {
                console.log('请求失败', err);
                this.errors = err.response.data.errors;
            }
        },
    },
};
</script>

<style>
</style>
