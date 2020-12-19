<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input v-model="form.title" type="text" class="form-control form-control-lg" placeholder="Article Title">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="form.description" type="text" class="form-control" placeholder="What's this article about?">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="form.body" class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="form.tagList" type="text" class="form-control" placeholder="Enter tags">
                <!-- <div class="tag-list"></div> -->
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="postArticles">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { postArticles } from '@/api/article';

export default {
    // 在路由匹配组件渲染之前会先执行中间件处理
    middleware: 'authenticated',
    name: 'EditorIndex',
    data() {
        return {
            form: {
                title: '',
                description: '',
                body: '',
                tagList: '',
            },
        };
    },
    methods: {
        async postArticles() {
            let article = { ...this.form, tagList: '' };
            article.tagList = this.form.tagList.split(',');
            await postArticles({ article: article });
        },
    },
};
</script>

<style>
</style>
