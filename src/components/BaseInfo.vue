<template>
  <header class="content-hd">
    <section class="title">
      <div class="title-content">
        <div class="title-text">
          <div class="name">
            <h1>{{$t('message.myname')}}</h1>
          </div>
          <div class="job">
            <h2>{{$t('message.jobtitle')}}</h2>
          </div>
        </div>
        <!-- <div class="avatar">
          <img 
            :src="avatarUrl" 
            :alt="$t('message.myname')" 
            @click="openImg"
            class="avatar-img"
          />
        </div> -->
      </div>
    </section>
    <section class="info">
      <ul>
        <li>{{$t('message.gender')}} / 1994.04 / <span v-if="isEnglish">Chinese citizen</span> </li>
        <li>{{$t('message.university')}}</li>
        <li>{{$t('message.profession')}}</li>
        <li>{{$t('message.graduate')}}</li>
      </ul>
    </section>
    <section class="contact">
      <ul>
        <li>
          <a href="https://www.zhihu.com/people/nibl" target="_blank">
            <span class="contact-link">知乎 - nibl</span>
            <span class="iconfont">
              <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                <path
                  d="M544 512h96l-96-96V320h160v-64H544V96h-64v160H320v64h160v96l-96 96h96v320h-96v64h256v-64h-96V512z"
                ></path>
              </svg>
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/nibilin33" target="_blank">
            <span class="contact-link">Github - nibilin33</span>
            <span class="iconfont">
              <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                <path
                  d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z"
                ></path>
              </svg>
            </span>
          </a>
        </li>
        <li>
          <a href="mailto:nibilin33@gmail.com" target="_blank">
            <span class="contact-link">nibilin33@gmail.com</span>
            <span class="iconfont">
              <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                <path
                  d="M903.808 239.04l-818.304 0 0 545.92 852.992 0 0-545.92-34.688 0zM869.664 273.152l-329.536 329.536c-15.04 15.04-41.248 15.04-56.288 0l-329.6-329.536 715.392 0zM119.616 286.752l221.536 221.504-221.536 221.536 0-443.072zM146.848 750.848l218.464-218.432 94.432 94.4c13.952 13.952 32.512 21.664 52.256 21.664s38.304-7.712 52.256-21.664l94.432-94.432 218.432 218.432-730.304 0zM904.384 729.824l-221.536-221.568 221.536-221.568 0 443.136z"
                ></path>
              </svg>
            </span>
          </a>
        </li>
        <li>
          <a href="tel:13960845178" target="_blank">
            <span class="contact-link">13960845178</span>
            <span class="iconfont">
              <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                <path
                  d="M256 1024l512 0c26.464 0 48-21.536 48-48l0-928c0-26.464-21.536-48-48-48l-512 0c-26.464 0-48 21.536-48 48l0 928c0 26.464 21.536 48 48 48zM240 48c0-8.832 7.168-16 16-16l512 0c8.832 0 16 7.168 16 16l0 928c0 8.832-7.168 16-16 16l-512 0c-8.832 0-16-7.168-16-16l0-928zM288 864l448 0c8.832 0 16-7.168 16-16l0-672c0-8.832-7.168-16-16-16l-448 0c-8.832 0-16 7.168-16 16l0 672c0 8.832 7.168 16 16 16zM304 192l416 0 0 640-416 0 0-640zM496 928c0 17.664 14.336 32 32 32s32-14.336 32-32c0-17.664-14.336-32-32-32-17.664 0-32 14.336-32 32zM448 128l128 0c8.832 0 16-7.168 16-16s-7.168-16-16-16l-128 0c-8.832 0-16 7.168-16 16s7.168 16 16 16z"
                ></path>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </section>
  </header>
</template>

<script>
export default {
  name: "BaseInfo",
  props: {
    isEnglish: {
      type: Boolean
    }
  },
  data() {
    return {
      // 您可以替换为您的头像图片URL，或者上传头像到static目录
      avatarUrl: "https://nibilin33.github.io/nibl-resume/static/me.jpg" // 临时使用现有图标，建议替换为您的头像
    };
  },
  mounted() {},
  computed: {},
  methods: {
    openImg(e) {
      const { target } = e;
      if (target.currentSrc) {
        window.open(target.currentSrc);
      }
    }
  }
};
</script>

<style scoped>
.title-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.title-text {
  flex: 1;
}

.avatar {
  margin-left: 20px;
}

.avatar-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
  border: 3px solid #f0f0f0;
}

.avatar-img:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .title-content {
    flex-direction: column;
    text-align: center;
  }
  
  .avatar {
    margin-left: 0;
    margin-top: 15px;
  }
  
  .avatar-img {
    width: 60px;
    height: 60px;
  }
}
</style>
