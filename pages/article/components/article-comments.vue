<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea class="form-control" v-model="commentBody" placeholder="Write a comment..." rows="3"></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click.prevent="postComment">
          Post Comment
        </button>
      </div>
    </form>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link class="comment-author" :to="{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }">
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link class="comment-author" :to="{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }">
          {{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments, postComment } from '@/api/article';
import { mapState } from 'vuex';

export default {
    name: 'ArticleComments',
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            comments: [], // 文章列表
            commentBody: '',
        };
    },
    computed: {
        ...mapState(['user']),
    },
    mounted() {
        this.getComments();
    },
    methods: {
        async getComments() {
            const { data } = await getComments(this.article.slug);
            this.comments = data.comments;
        },

        async postComment() {
            try {
                const { data } = await postComment(this.article.slug, {
                    comment: { body: this.commentBody },
                });
                this.getComments();
            } catch (e) {}
        },
    },
};
</script>

<style>
</style>
