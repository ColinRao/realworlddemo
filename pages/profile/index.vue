<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="userProfile.image" class="user-img" />
            <h4>{{ userProfile.username }}</h4>
            <p>
              Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games
            </p>
            <button class="btn btn-sm action-btn btn-outline-secondary" @click="follow">
              <i class="ion-plus-round"></i>
              &nbsp;
              {{userProfile.following ? 'Unfollow' : 'Follow'}} {{ userProfile.username }}
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <span class="nav-link" :class="{'active':activeTabKey==='My'}" @click="onTabChange('My')">My Articles</span>
              </li>
              <li class="nav-item">
                <span class="nav-link" :class="{'active':activeTabKey==='Favorited'}" @click="onTabChange('Favorited')">
                  Favorited Articles</span>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="article in articles">
            <div class="article-meta">
              <img :src="article.author.image" />
              <div class="info">
                <a href="" class="author">{{article.author.username}}</a>
                <span class="date">{{article.createdAt | date('MMM DD, YYYY')}}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <a href="" class="preview-link">
              <h1>{{article.title}}</h1>
              <p>{{article.description}}</p>
              <span>Read more...</span>
              <nuxt-link class="author" :to="{
                  name: 'article',
                  params: {
                    slug: article.slug
                  }
                }">
                Read more...
              </nuxt-link>
              <ul class="tag-list">
                <li class="tag-default tag-pill tag-outline" v-for="tag in article.tagList">{{tag}}</li>
              </ul>
            </a>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {
    getArticles,
    getYourFeedArticles,
    addFavorite,
    deleteFavorite,
} from '@/api/article';
import { getTags } from '@/api/tag';
import { profile, following } from '@/api/user';

export default {
    middleware: 'authenticated',
    name: 'UserProfile',
    computed: {},
    data() {
        return {
            userProfile: {},
            articles: [],
            activeTabKey: 'My',
        };
    },
    mounted() {
        this.getProfile();
    },
    methods: {
        onTabChange(activeKey) {
            console.log('onTabChange', activeKey);
            this.activeTabKey = activeKey;
            if (activeKey === 'My') {
                this.getArticles({
                    author: this.userProfile.username,
                });
            }
            if (activeKey === 'Favorited') {
                this.getArticles({
                    favorited: this.userProfile.username,
                });
            }
        },

        async onFavorite(article) {
            article.favoriteDisabled = true;
            if (article.favorited) {
                // 取消点赞
                await deleteFavorite(article.slug);
                article.favorited = false;
                article.favoritesCount += -1;
            } else {
                // 添加点赞
                await addFavorite(article.slug);
                article.favorited = true;
                article.favoritesCount += 1;
            }
            article.favoriteDisabled = false;
        },

        async getProfile() {
            try {
                let res = await profile(this.$route.params.username);

                if (res) {
                    this.userProfile = res.data.profile;

                    this.getArticles({
                        author: this.userProfile.username,
                    });
                }
            } catch (e) {
                console.log('getProfile onError', e);
            }
        },

        async getArticles(params) {
            try {
                let res = await getArticles(params);
                if (res) {
                    this.articles = res.data.articles;
                }
            } catch (e) {
                console.log('getProfile onError', e);
            }
        },

        async follow() {
            try {
                let res = await following(this.$route.params.username);
                if (res) {
                    this.userProfile = res.data.profile;
                }
            } catch (e) {
                console.log('following onError', e);
            }
        },
    },
};
</script>

<style>
</style>
