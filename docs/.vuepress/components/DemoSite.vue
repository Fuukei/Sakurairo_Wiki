<template>
  <a :href="site.url" target="_blank">
    <img width="80px" style="border-radius: 100px;max-width: 80px;" :src="site.avatar" />
    <br />
    <sub :title="site.desc">{{ site.name }}</sub>
  </a>
</template>

<script>
export default {
  props: {
    site: {
      type: Object,
      default() {
        return {
          name: "約束の明日へ",
          url: "https://asuhe.jp",
          avatar: "https://asuhe.jp/wp-content/uploads/2020/12/logo.png",
          desc: "また君を思い出すよ",
        };
      },
    },
  },
};
</script>
