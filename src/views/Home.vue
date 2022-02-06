<template lang="pug">
div.index
	nav.index__nav
		a(href="#").index__nav--ttl
			h1 {{name}}
			span {{enName}} unoffical site
		ul.index__nav--link
			li
				a(href="#sns") YOUTUBE／TWITTER
			li
				a(href="#works") WORKS
			li
				a(href="#coaching") COACHING
			li
				a(href="#contact") CONTACT
	main
		div.index__fv
			//- div(:style="{backgroundImage:'url(' + imgPath + 'index_fv.png)'}").index__fv--bg
			div.index__fv--img
				//- img(:src="`${imgPath}index_fv.png`", :alt="`${name}`")
			div.index__fv--txt
				section
					h2 {{name}}
					p {{enName}} unoffical site
				p.index__fv--description
					|Dead by Daylight総プレイ約8500時間、大会優勝経験あり。
					br
					|現在は大会等で解説・実況を行いながら、YouTubeにてキラーメインで配信中。
				div.index__fv--link
					a(:href="`${dummyURL.youtube}`",target="youtube").index__fv--link--youtube
						span YouTube
						svg(xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
							g(transform="translate(-996 -1928)")
								g(transform="translate(996 1871)")
									path(d="M30.169,63.363C28.529,62.039,22.747,61,16,61S3.471,62.039,1.831,63.363C.324,64.578,0,70.07,0,73.188S.324,81.8,1.831,83.012C3.471,84.336,9.253,85.375,16,85.375s12.529-1.039,14.169-2.363C31.676,81.8,32,76.3,32,73.188S31.676,64.578,30.169,63.363ZM20.8,73.338l-7.428,4.434a.175.175,0,0,1-.265-.15V68.754a.175.175,0,0,1,.265-.15L20.8,73.037a.174.174,0,0,1,.085.15A.176.176,0,0,1,20.8,73.338Z")
									rect(width="32", height="32", transform="translate(996 1928)")
					a(:href="`${dummyURL.twitter}`",target="twitter").index__fv--link--twitter
						span Twitter
						svg(xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
							g(transform="translate(-1040 -1992)")
								rect(width="32", height="32", transform="translate(1040 1992)")
								path(d="M177.769,166.939c.012-.018.026-.034.038-.051a13.108,13.108,0,0,1-2.97.907c-.247.037-.5.069-.748.088a6.582,6.582,0,0,0,2.459-2.709,7.089,7.089,0,0,0,.393-.855l-.038.021c.005-.017.016-.032.021-.05a13.144,13.144,0,0,1-4.167,1.592,6.558,6.558,0,0,0-11.2,5.864c.006.04.009.08.015.12a18.6,18.6,0,0,1-12.284-5.489c-.421-.43-.828-.877-1.207-1.35l0,.01-.024-.027a6.548,6.548,0,0,0,1.174,8.064,7.033,7.033,0,0,0,.808.693,6.539,6.539,0,0,1-2.924-.816c0,.027,0,.055,0,.083a6.548,6.548,0,0,0,3.829,5.944,6.671,6.671,0,0,0,1.378.5,6.571,6.571,0,0,1-1.671.219,6.489,6.489,0,0,1-1.09-.1c-.036-.01-.077-.013-.112-.024l.006.014c-.012,0-.026,0-.038,0a6.574,6.574,0,0,0,5.08,4.454,6.837,6.837,0,0,0,1.022.124,13.166,13.166,0,0,1-8.122,2.789c-.426,0-.843-.034-1.258-.074-.1-.017-.2-.023-.289-.047l.056.033c-.024,0-.049,0-.073,0a18.573,18.573,0,0,0,10.06,2.948,17.958,17.958,0,0,0,14.8-7.253c.01-.014.022-.027.032-.04.3-.4.576-.819.842-1.241.055-.086.115-.168.168-.255.245-.4.466-.817.679-1.234.053-.1.114-.2.165-.309q.373-.761.675-1.545l.008-.018a18.917,18.917,0,0,0,1.3-6.775q0-.427-.019-.849a13.33,13.33,0,0,0,2.7-2.616c.2-.246.4-.493.588-.751Z", transform="translate(894.18 1831.189)")
			transition(v-show="snsFlag",ref="sns")
				div.index__fv--sns.bottomToTopFadeIn#sns
					div.index__fv--sns--youtube
						a(:href="`${dummyURL.youtube}`",target="youtube")
							div
								div.index__fv--sns--youtube--icon
									img(:src="`${imgPath}index_sns_youtube.png`", :alt="`${name}（YouTubeチャンネル）`")
								span {{name}}（YouTubeチャンネル）
							div
								iframe(width="560", height="315", src="https://www.youtube.com/embed/4F7F1z9imvQ", title="YouTube video player", frameborder="0", allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowfullscreen)
								//- iframe(width="560", height="315", src="https://www.youtube.com/embed/DxCPTNFYU5U", title="YouTube video player", frameborder="0", allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowfullscreen)
							//- div
								a(href="https://www.youtube.com/watch?v=6zxSWFCbg4k&list=PL2o9WqTI9kLnu3Wnl1qOWFIddjQ45h7Mt",target="youtube") 配信アーカイブ再生リスト
								a(href="https://www.youtube.com/watch?v=zWj3mMuu1yg&list=PL2o9WqTI9kLkPSRMAeIJOEcBIWXsL0nid",target="youtube") 実況動画再生リスト
						a(:href="`${dummyURL.kirinuki}`",target="youtube")
							div.index__fv--sns--youtube--icon
								img(:src="`${imgPath}index_sns_kirinuki.png`", :alt="`${name}-切り抜きch（公認切り抜きチャンネル）`")
							span {{name}}-切り抜きch（公認切り抜きチャンネル）
					div.index__fv--sns--twitter
						//- a.twitter-timeline(href="https://twitter.com/kaogei_jp?ref_src=twsrc%5Etfw") Tweets by kaogei_jp
		transition(v-show="worksFlag",ref="works")
			section.index__works#works
				h2.index__works--headline.bottomToTopFadeIn
					span Works
					span これまでの活動
				div.index__works--tournament.leftToRightFadeIn
					ul
						li(v-for="item in 5")
							span {{tournamentTxt.ttl}}
							span {{tournamentTxt.result}}
				div.index__works--appearance.rightToLeftFadeIn
					ul
						li(v-for="item in 12")
							span {{appearanceTxt.ttl}}
							span {{appearanceTxt.work}}
		transition(v-show="coachingFlag")
			section(ref="coaching").index__coaching#coaching
				h2.index__coaching--headline.bottomToTopFadeIn
					span Coaching
					span コーチング
				div.index__coaching--trouble.bottomToTopFadeIn
					div(v-for="(item,i) in coaching",:key="i").index__coaching--trouble--item
						span.index__coaching--trouble--txt {{item.txt}}
						span.index__coaching--trouble--ttl {{item.ttl}}
				p.index__coaching--description
					|これまでの大会優勝経験・大会解説経験を活かし、{{name}}が皆さんをサポートいたします。<br>
					|基本的にどなたでもご応募いただけますが、教わる気がなくただ会話をしたいだけという方はご遠慮下さい。
				a(:href="`${dummyURL.skilltown}`",target="coaching").index__coaching--link コーチングを依頼する（スキルタウン）
		section(:class="{opacity:!coachingFlag}").index__contact#contact
			transition(v-show="contactFlag")
				div
					h2.index__contact--headline.bottomToTopFadeIn
						span Contact
						span お問い合わせ
					form.bottomToTopFadeIn
						label(v-for="(item,i) in contact",:key="i").index__contact--form
							p.index__contact--form--ttl {{item.ttl}}
							input(:type="item.contentes",:placeholder="`${item.ttl}を入力してください`")
						label.index__contact--form
							p.index__contact--form--ttl お問合せ内容
							textarea(plaseholder="お問合せ内容を入力してください")
						button(type="submit").index__contact--btn 送信
		footer(:class="{opacity:!contactFlag}").index__foot
			a(href="#").index__foot--top
			div.index__foot--contents
				ul
					li
						a(:href="`${dummyURL.youtube}`",target="youtube")
							svg(xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
								g(transform="translate(-996 -1928)")
									g(transform="translate(996 1871)")
										path(d="M30.169,63.363C28.529,62.039,22.747,61,16,61S3.471,62.039,1.831,63.363C.324,64.578,0,70.07,0,73.188S.324,81.8,1.831,83.012C3.471,84.336,9.253,85.375,16,85.375s12.529-1.039,14.169-2.363C31.676,81.8,32,76.3,32,73.188S31.676,64.578,30.169,63.363ZM20.8,73.338l-7.428,4.434a.175.175,0,0,1-.265-.15V68.754a.175.175,0,0,1,.265-.15L20.8,73.037a.174.174,0,0,1,.085.15A.176.176,0,0,1,20.8,73.338Z")
										rect(width="32", height="32", transform="translate(996 1928)")
					li
						a(:href="`${dummyURL.twitter}`",target="twitter")
							svg(xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
								g(transform="translate(-1040 -1992)")
									rect(width="32", height="32", transform="translate(1040 1992)")
									path(d="M177.769,166.939c.012-.018.026-.034.038-.051a13.108,13.108,0,0,1-2.97.907c-.247.037-.5.069-.748.088a6.582,6.582,0,0,0,2.459-2.709,7.089,7.089,0,0,0,.393-.855l-.038.021c.005-.017.016-.032.021-.05a13.144,13.144,0,0,1-4.167,1.592,6.558,6.558,0,0,0-11.2,5.864c.006.04.009.08.015.12a18.6,18.6,0,0,1-12.284-5.489c-.421-.43-.828-.877-1.207-1.35l0,.01-.024-.027a6.548,6.548,0,0,0,1.174,8.064,7.033,7.033,0,0,0,.808.693,6.539,6.539,0,0,1-2.924-.816c0,.027,0,.055,0,.083a6.548,6.548,0,0,0,3.829,5.944,6.671,6.671,0,0,0,1.378.5,6.571,6.571,0,0,1-1.671.219,6.489,6.489,0,0,1-1.09-.1c-.036-.01-.077-.013-.112-.024l.006.014c-.012,0-.026,0-.038,0a6.574,6.574,0,0,0,5.08,4.454,6.837,6.837,0,0,0,1.022.124,13.166,13.166,0,0,1-8.122,2.789c-.426,0-.843-.034-1.258-.074-.1-.017-.2-.023-.289-.047l.056.033c-.024,0-.049,0-.073,0a18.573,18.573,0,0,0,10.06,2.948,17.958,17.958,0,0,0,14.8-7.253c.01-.014.022-.027.032-.04.3-.4.576-.819.842-1.241.055-.086.115-.168.168-.255.245-.4.466-.817.679-1.234.053-.1.114-.2.165-.309q.373-.761.675-1.545l.008-.018a18.917,18.917,0,0,0,1.3-6.775q0-.427-.019-.849a13.33,13.33,0,0,0,2.7-2.616c.2-.246.4-.493.588-.751Z", transform="translate(894.18 1831.189)")
				small &copy; 2021 {{enName}}.
</template>

<script>
// import outside from "https://platform.twitter.com/widgets.js";
import Mixin from "@/mixins/Mixin.vue";
export default {
  name: "Home",
  mixins: [Mixin],
  data() {
    return {
      coaching: [
        {
          txt: "最近キラーを触り始めた…",
          ttl: `何からしたら良いか
分からない`,
        },
        {
          txt: "ある程度キラーは出来るけど…",
          ttl: `まだ安定して
全滅できない`,
        },
        {
          txt: "赤帯だけど…",
          ttl: `強いサバイバーだと
全滅できない`,
        },
        {
          txt: "",
          ttl: `今後大会等で
キラーとして出場される`,
        },
      ],
      contact: [
        {
          ttl: "お名前",
          contents: "text",
        },
        {
          ttl: "メールアドレス",
          contents: "email",
        },
      ],
      foot: [
        {
          svg: "",
        },
      ],
      contactBgImg: `${this.imgPath}index_contact_bg.png`,
      tournamentTxt: { ttl: "DDD Champion Ship Vol.ex", result: "優勝" },
      appearanceTxt: { ttl: "BBB Champion Ship Vol.ex", work: "実況・解説" },
      snsFlag: true,
      num: 0,
      snsNum: 0,
      worksNum: 0,
      worksFlag: false,
      coachingFlag: false,
      contactFlag: false,
    };
  },
  watch: {
    worksFlag: function () {
      setTimeout(() => {
        this.worksNum = this.$refs.works.getBoundingClientRect().bottom;
      }, 1000);
    },
    coachingFlag: function () {
      setTimeout(() => {
        this.coachingNum =
          this.$refs.coaching.getBoundingClientRect().bottom +
          this.$refs.coaching.getBoundingClientRect().height;
      }, 1000);
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.num = Math.abs(this.$el.getBoundingClientRect().top);
      // console.log(this.num);
      if (!this.worksFlag) {
        this.worksFlag = this.num > this.snsNum - window.innerHeight + 160;
      }
      if (this.worksNum !== 0) {
        if (!this.coachingFlag) {
          this.coachingFlag = this.num > this.worksNum + 320;
        }
      }
      if (this.coachingNum !== 0) {
        if (!this.contactFlag) {
          this.contactFlag = this.num > this.coachingNum + 560;
        }
      }
    },
  },
  mounted() {
    if (this.snsFlag) {
      this.snsNum = this.$refs.sns.getBoundingClientRect().bottom;
    }
  },
  // unmounted() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.topToBottomFadeIn {
  animation: topToBottom 1s;
}
.bottomToTopFadeIn {
  animation: bottomToTop 1s;
}
.rightToLeftFadeIn {
  animation: rightToLeft 1s;
  // animation-delay: 1s;
}
.leftToRightFadeIn {
  animation: leftToRight 1s;
  // animation-delay: 0.5s;
}
@keyframes topToBottom {
  0% {
    opacity: 0;
    transform: translateY(-80px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes bottomToTop {
  0% {
    opacity: 0;
    transform: translateY(80px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes rightToLeft {
  0% {
    opacity: 0;
    transform: translateX(80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes leftToRight {
  0% {
    opacity: 0;
    transform: translateX(-80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
.index {
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 72px;
    background: rgba($color: #fff, $alpha: 0.9);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    &--ttl {
      display: flex;
      align-items: center;
      color: $mainColor;
      margin: 0 0 0 8vw;
      opacity: 1;
      transition: 0.2s opacity;
      h1 {
        font-size: 2.8rem;
        margin: 0 24px 0 0;
      }
      span {
        font-size: 1.7rem;
        font-family: $subEnFont;
      }
      &:hover {
        opacity: 0.5;
      }
    }
    &--link {
      height: inherit;
      display: flex;
      align-items: center;
      a {
        color: $mainColor;
      }
      li {
        font-family: $mainEnFont;
        margin-right: 40px;
        font-size: 1.6rem;
        font-weight: 800;
        a {
          color: $mainColor;
          transition: 0.2s color;
        }
        &:hover {
          a {
            color: $accentColor;
          }
        }
        &:last-of-type {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: inherit;
          margin: 0;
          color: $mainColor;
          background: $accentColor;
          transition: 0.2s background;
          mix-blend-mode: multiply;
          &:hover {
            background: $mainColor;
          }
        }
      }
    }
  }
  &__fv {
    display: flex;
    justify-content: center;
    height: 90vh;
    position: relative;
    // overflow: hidden;
    // &--bg {
    //   width: 110vw;
    //   height: 120%;
    //   background-size: cover;
    //   background-position: center center;
    //   background-repeat: no-repeat;
    //   filter: blur(20px);
    //   position: absolute;
    //   top: 0;
    //   z-index: -1;
    // }
    margin-bottom: 400px;
    &--img {
      // display: flex;
      // justify-content: flex-end;
      // align-items: flex-end;
      // width: 40vw;
      width: 100vw;
      height: 100%;
      background-image: url("https://manami-sato.github.io/practice-site_1/src/assets/img/index_fv.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top right;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
        // object-fit: contain;
        object-fit: cover;
      }
    }
    &--txt {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: max-content;
      color: #fff;
      text-shadow: 0 0 30px rgba($color: #000000, $alpha: 0.9);
      margin: 0 0 0 400px;
      section {
        display: flex;
        align-items: center;
        height: 6rem;
        margin-bottom: 24px;
        h2 {
          font-size: 6rem;
          margin: 0 32px 0 0;
        }
        p {
          font-size: 2.8rem;
          font-family: $subEnFont;
        }
      }
    }
    &--link {
      display: flex;
      margin: 48px 0 32px;
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 248px;
        height: 56px;
        color: #fff;
        font-size: 1.6rem;
        font-weight: bold;
        padding: 0 24px;
        border-radius: 28px;
      }
      &--youtube {
        background: #da1725;
        margin: 0 16px 0 0;
        opacity: 1;
        transition: 0.2s opacity;
        &:hover {
          opacity: 0.7;
        }
      }
      &--twitter {
        background: #00aced;
        opacity: 1;
        transition: 0.2s opacity;
        &:hover {
          opacity: 0.7;
        }
      }
    }
    &--sns {
      display: flex;
      justify-content: space-around;
      width: 85vw;
      max-width: 1200px;
      margin: 0 auto;
      padding: 104px 0 24px 0;
      position: absolute;
      bottom: -400px;
      left: 0;
      right: 0;
      &--youtube {
        width: calc(560px + 24px * 2);
        border-radius: 16px;
        box-shadow: 0 0 30px rgba($color: #000000, $alpha: 0.2);
        overflow: hidden;
        font-weight: bold;
        color: $baceColor;
        > a {
          &:first-of-type {
            display: block;
            color: $baceColor;
            background: $mainColor;
            transition: 0.2s background, 0.2s color;
            &:hover {
              color: $mainColor;
              background: $accentColor;
            }
            > div {
              &:first-of-type {
                display: flex;
                align-items: center;
                padding: 16px 24px;
              }
              &:nth-child(2) {
                padding: 0 24px 16px;
              }
            }
          }
          &:last-of-type {
            display: flex;
            align-items: center;
            padding: 16px 24px;
            color: $mainColor;
            background: $baceColor;
            transition: 0.2s background;
            &:hover {
              background: $accentColor;
            }
            .index__sns--youtube--icon {
              width: 40px;
              height: 40px;
            }
          }
        }
        &--icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 16px 0 0;
          img {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      &--twitter {
        width: 35%;
        background: $baceColor;
        box-shadow: 0 0 30px rgba($color: #000000, $alpha: 0.2);
      }
    }
  }
  &__works {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-height: 80vh;
    padding-top: 104px;
    position: relative;
    &--headline {
      @include headlineSet($ai: flex-end, $m: 0 15vw 48px 0);
    }
    &--tournament {
      width: max-content;
      color: $mainColor;
      background: linear-gradient(90deg, $baceColor 80%, transparent 20%);
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 3rem;
      padding: 56px 0 192px 184px;
      position: absolute;
      top: 80px;
      left: 0;
      z-index: 2;
      @include worksAfterSet();
      span {
        &:last-of-type {
          display: inline-block;
          color: $accentColor;
          margin: 0 0 0 8px;
        }
      }
    }
    &--appearance {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      width: 80%;
      color: $baceColor;
      background: $mainColor;
      font-size: 1.4rem;
      font-weight: bold;
      line-height: 3rem;
      padding: 80px 64px;
      @include worksAfterSet(
        $text: "出演履歴",
        $color: $mainColor,
        $l: 22%,
        $b: 40px
      );
      li {
        text-align: right;
      }
      span {
        &:last-of-type {
          display: inline-block;
          margin: 0 0 0 8px;
        }
      }
    }
  }
  &__coaching {
    padding: 88px 0 0 0;
    margin: 0 0 136px 0;
    &--headline {
      @include headlineSet();
    }
    &--trouble {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 85vw;
      max-width: 1200px;
      margin: 0 auto;
      &--item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 240px;
        height: 240px;
        background: $baceColor;
        margin: 16px;
        border-radius: 50%;
      }
      &--txt {
        color: #707070;
        margin: 0 0 8px 0;
      }
      &--ttl {
        color: $mainColor;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    }
    &--description {
      text-align: center;
      margin: 56px 0;
    }
    &--link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      height: 72px;
      color: #fff;
      background: $mainColor;
      font-size: 1.8rem;
      font-weight: bold;
      margin: 0 auto;
      padding: 0 56px;
      box-shadow: 0 6px 10px #6f8a98;
      border-radius: 36px;
      transition: 0.2s background, 0.2s box-shadow, 0.2s color, 0.2s transform;
      transform: translateY(0);
      &:hover {
        color: $mainColor;
        background: darken($color: $baceColor, $amount: 10%);
        box-shadow: none;
        transform: translateY(6px);
      }
    }
  }
  &__contact {
    min-height: 100vh;
    background: $accentColor;
    padding: 88px 12vw;
    position: relative;
    form {
      &::after {
        content: "";
        display: block;
        width: 25vw;
        max-width: 400px;
        min-width: 256px;
        height: 400px;
        background-image: url("https://manami-sato.github.io/practice-site_1/src/assets/img/index_contact_bg.png");
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 120px;
        bottom: 0;
        right: 12vw;
        margin: auto;
      }
    }
    &--headline {
      @include headlineSet($ai: flex-start, $color: #fff, $bg: #fff);
    }
    &--form {
      display: block;
      margin-bottom: 32px;
      position: relative;
      z-index: 2;
      &--ttl {
        color: #fff;
        font-weight: bold;
        margin-bottom: 16px;
      }
      input,
      textarea {
        width: 60%;
        min-width: 480px;
        background: #fff;
        padding: 12px 24px;
        border-radius: 8px;
        &::placeholder {
          color: rgb(187, 187, 187);
        }
        &:focus {
          color: #424242;
          background: $baceColor;
          outline: none;
        }
      }
      textarea {
        height: 256px;
      }
    }
    &--btn {
      color: #fff;
      background: $mainColor;
      font-weight: bold;
      padding: 12px 40px;
      border-radius: 8px;
    }
  }
  &__foot {
    &--top {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 48px;
      background: darken($color: $baceColor, $amount: 5%);
      transition: 0.2s background;
      &::before,
      &::after {
        content: "";
        display: block;
        width: 4px;
        height: 24px;
        background: $mainColor;
        transition: 0.2s background;
      }
      &::before {
        margin: 0 5px 0 0;
        transform: rotateZ(45deg);
      }
      &::after {
        margin: 0 0 0 5px;
        transform: rotateZ(-45deg);
      }
      &:hover {
        background: darken($color: $mainColor, $amount: 10%);
        &::before,
        &::after {
          background: $accentColor;
        }
      }
    }
    &--contents {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      height: 88px;
      background: $mainColor;
      padding: 0 10vw;
      ul {
        display: flex;
        li {
          opacity: 1;
          transition: 0.2s opacity;
          &:first-of-type {
            margin-right: 40px;
          }
          &:hover {
            opacity: 0.6;
          }
        }
      }
      small {
        color: $baceColor;
      }
    }
  }
}
.opacity {
  opacity: 0;
}
</style>
