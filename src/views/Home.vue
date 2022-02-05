<template lang="pug">
div.index
	nav.index__nav
		h1.index__nav--ttl
			span 顔芸
			span Kaogaming unoffical fun site
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
			div.index__fv--img
				img(src="", alt="顔芸")
			section
				div.index__fv--ttl
					h2 顔芸
					p Kaogaming unoffical fun site
				p.index__fv--description
					| Dead by Daylight総プレイ約8500時間、大会優勝経験あり。
					br
					| 現在は大会等で解説・実況を行いながら、YouTubeにてキラーメインで配信中。
				div.index__fv--link
					a(href="").index__fv--link--youtube
						span YouTube
						svg(xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
							g(transform="translate(-996 -1928)")
								g(transform="translate(996 1871)")
									path(d="M30.169,63.363C28.529,62.039,22.747,61,16,61S3.471,62.039,1.831,63.363C.324,64.578,0,70.07,0,73.188S.324,81.8,1.831,83.012C3.471,84.336,9.253,85.375,16,85.375s12.529-1.039,14.169-2.363C31.676,81.8,32,76.3,32,73.188S31.676,64.578,30.169,63.363ZM20.8,73.338l-7.428,4.434a.175.175,0,0,1-.265-.15V68.754a.175.175,0,0,1,.265-.15L20.8,73.037a.174.174,0,0,1,.085.15A.176.176,0,0,1,20.8,73.338Z")
									rect(width="32", height="32", transform="translate(996 1928)")
					a(href="").index__fv--link--twitter
						span Twitter
						svg(xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
							g(transform="translate(-1040 -1992)")
								rect(width="32", height="32", transform="translate(1040 1992)")
								path(d="M177.769,166.939c.012-.018.026-.034.038-.051a13.108,13.108,0,0,1-2.97.907c-.247.037-.5.069-.748.088a6.582,6.582,0,0,0,2.459-2.709,7.089,7.089,0,0,0,.393-.855l-.038.021c.005-.017.016-.032.021-.05a13.144,13.144,0,0,1-4.167,1.592,6.558,6.558,0,0,0-11.2,5.864c.006.04.009.08.015.12a18.6,18.6,0,0,1-12.284-5.489c-.421-.43-.828-.877-1.207-1.35l0,.01-.024-.027a6.548,6.548,0,0,0,1.174,8.064,7.033,7.033,0,0,0,.808.693,6.539,6.539,0,0,1-2.924-.816c0,.027,0,.055,0,.083a6.548,6.548,0,0,0,3.829,5.944,6.671,6.671,0,0,0,1.378.5,6.571,6.571,0,0,1-1.671.219,6.489,6.489,0,0,1-1.09-.1c-.036-.01-.077-.013-.112-.024l.006.014c-.012,0-.026,0-.038,0a6.574,6.574,0,0,0,5.08,4.454,6.837,6.837,0,0,0,1.022.124,13.166,13.166,0,0,1-8.122,2.789c-.426,0-.843-.034-1.258-.074-.1-.017-.2-.023-.289-.047l.056.033c-.024,0-.049,0-.073,0a18.573,18.573,0,0,0,10.06,2.948,17.958,17.958,0,0,0,14.8-7.253c.01-.014.022-.027.032-.04.3-.4.576-.819.842-1.241.055-.086.115-.168.168-.255.245-.4.466-.817.679-1.234.053-.1.114-.2.165-.309q.373-.761.675-1.545l.008-.018a18.917,18.917,0,0,0,1.3-6.775q0-.427-.019-.849a13.33,13.33,0,0,0,2.7-2.616c.2-.246.4-.493.588-.751Z", transform="translate(894.18 1831.189)")
		div.index__sns#sns
			div.index__sns--youtube
				div
					a
						div.index__sns--youtube--icon
							img(src="",alt="")
						span.index__sns--youtube--txt 顔芸（YouTubeチャンネル）
					div
						iframe(width="560", height="315", src="https://www.youtube.com/embed/DxCPTNFYU5U", title="YouTube video player", frameborder="0", allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowfullscreen)
				div
					a
						div.index__sns--youtube--icon
							img(src="",alt="")
						span.index__sns--youtube--txt 顔芸さん切り抜き（公認切り抜きチャンネル）
			div.index__sns--twitter
				//- a.twitter-timeline(href="https://twitter.com/kaogei_jp?ref_src=twsrc%5Etfw") Tweets by kaogei_jp
		section.index__works#works
			h2.index__works--headline
				span Works
				span これまでの活動
			div.index__works--tournament
				ul
					li DFC supported by JCG Vol.5 準優勝
					li DFC supported by JCG Vol.5 準優勝
					li DFC supported by JCG Vol.5 準優勝
					li DFC supported by JCG Vol.5 準優勝
					li DFC supported by JCG Vol.5 準優勝
			div.index__works--appearance
				ul
					li BUSHIROAD CREATIVE FOG FES SPECIAL MATCH Supported by DFC 予選：司会/実況/解説 決勝：解説
					li bbbbb
					li ccccc
					li BUSHIROAD CREATIVE FOG FES SPECIAL MATCH Supported by DFC 予選：司会/実況/解説 決勝：解説
					li bbbbb
					li ccccc
					li BUSHIROAD CREATIVE FOG FES SPECIAL MATCH Supported by DFC 予選：司会/実況/解説 決勝：解説
					li bbbbb
					li ccccc
					li BUSHIROAD CREATIVE FOG FES SPECIAL MATCH Supported by DFC 予選：司会/実況/解説 決勝：解説
					li bbbbb
					li ccccc
					li BUSHIROAD CREATIVE FOG FES SPECIAL MATCH Supported by DFC 予選：司会/実況/解説 決勝：解説
					li bbbbb
					li ccccc
		section.index__coaching#coaching
			h2.index__coaching--headline
				span Coaching
				span コーチング
			div.index__coaching--trouble
				div(v-for="(item,i) in coaching",:key="i").index__coaching--trouble--item
					span.index__coaching--trouble--txt {{item.txt}}
					span.index__coaching--trouble--ttl {{item.ttl}}
			p.index__coaching--description
				|これまでの大会優勝経験・大会解説経験を活かし、顔芸が皆さんをサポートいたします。<br>
				|基本的にどなたでもご応募いただけますが、教わる気がなくただ会話をしたいだけという方はご遠慮下さい。
			a(href="#").index__coaching--link コーチングを依頼する（スキルタウン）
		section.index__contact#contact
			h2.index__contact--headline
				span Contact
				span お問い合わせ
			form
				label(v-for="(item,i) in contact",:key="i").index__contact--form
					p.index__contact--form--ttl {{item.ttl}}
					input(:type="item.contentes",:placeholder="`${item.ttl}を入力してください`")
				label.index__contact--form
					p.index__contact--form--ttl お問合せ内容
					textarea(plaseholder="お問合せ内容を入力してください")
				button(type="submit").index__contact--btn 送信
		footer.index__foot
			a(href="#").index__foot--top
			div.index__foot--contents
				ul
					li
						a
							svg(xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
								g(transform="translate(-996 -1928)")
									g(transform="translate(996 1871)")
										path(d="M30.169,63.363C28.529,62.039,22.747,61,16,61S3.471,62.039,1.831,63.363C.324,64.578,0,70.07,0,73.188S.324,81.8,1.831,83.012C3.471,84.336,9.253,85.375,16,85.375s12.529-1.039,14.169-2.363C31.676,81.8,32,76.3,32,73.188S31.676,64.578,30.169,63.363ZM20.8,73.338l-7.428,4.434a.175.175,0,0,1-.265-.15V68.754a.175.175,0,0,1,.265-.15L20.8,73.037a.174.174,0,0,1,.085.15A.176.176,0,0,1,20.8,73.338Z")
										rect(width="32", height="32", transform="translate(996 1928)")
					li
						a
							svg(xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
								g(transform="translate(-1040 -1992)")
									rect(width="32", height="32", transform="translate(1040 1992)")
									path(d="M177.769,166.939c.012-.018.026-.034.038-.051a13.108,13.108,0,0,1-2.97.907c-.247.037-.5.069-.748.088a6.582,6.582,0,0,0,2.459-2.709,7.089,7.089,0,0,0,.393-.855l-.038.021c.005-.017.016-.032.021-.05a13.144,13.144,0,0,1-4.167,1.592,6.558,6.558,0,0,0-11.2,5.864c.006.04.009.08.015.12a18.6,18.6,0,0,1-12.284-5.489c-.421-.43-.828-.877-1.207-1.35l0,.01-.024-.027a6.548,6.548,0,0,0,1.174,8.064,7.033,7.033,0,0,0,.808.693,6.539,6.539,0,0,1-2.924-.816c0,.027,0,.055,0,.083a6.548,6.548,0,0,0,3.829,5.944,6.671,6.671,0,0,0,1.378.5,6.571,6.571,0,0,1-1.671.219,6.489,6.489,0,0,1-1.09-.1c-.036-.01-.077-.013-.112-.024l.006.014c-.012,0-.026,0-.038,0a6.574,6.574,0,0,0,5.08,4.454,6.837,6.837,0,0,0,1.022.124,13.166,13.166,0,0,1-8.122,2.789c-.426,0-.843-.034-1.258-.074-.1-.017-.2-.023-.289-.047l.056.033c-.024,0-.049,0-.073,0a18.573,18.573,0,0,0,10.06,2.948,17.958,17.958,0,0,0,14.8-7.253c.01-.014.022-.027.032-.04.3-.4.576-.819.842-1.241.055-.086.115-.168.168-.255.245-.4.466-.817.679-1.234.053-.1.114-.2.165-.309q.373-.761.675-1.545l.008-.018a18.917,18.917,0,0,0,1.3-6.775q0-.427-.019-.849a13.33,13.33,0,0,0,2.7-2.616c.2-.246.4-.493.588-.751Z", transform="translate(894.18 1831.189)")
				small &copy; 2021 Kaogei.
</template>

<script>
// import outside from "https://platform.twitter.com/widgets.js";
export default {
  name: "Home",
  data() {
    return {
      coaching: [
        {
          txt: "最近キラーを触り始めた…",
          ttl: "何からしたら良いか分からない",
        },
        {
          txt: "ある程度キラーは出来るけど…",
          ttl: "まだ安定して全滅できない",
        },
        {
          txt: "赤帯だけど…",
          ttl: "強いサバイバーだと全滅できない",
        },
        {
          txt: "",
          ttl: "今後大会等でキラーとして出場される",
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
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
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
      color: $mainColor;
      span {
        &:first-of-type {
          font-size: 4rem;
        }
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
        font-family: $font;
        margin-right: 40px;
        &:last-of-type {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: inherit;
          margin: 0;
          background: $accentColor;
        }
      }
    }
  }
  &__fv {
    &--link {
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
      }
      &--twitter {
        background: #00aced;
      }
    }
  }
  &__sns {
    display: flex;
    justify-content: space-between;
    width: 85vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0 24px 0;
    &--youtube {
      width: 60%;
      border-radius: 16px;
      box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.3);
      overflow: hidden;
      &--icon {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        overflow: hidden;
        img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &--txt {
        color: $baceColor;
        font-weight: bold;
      }
      > div {
        > a {
          display: flex;
          align-items: center;
        }
        &:first-of-type {
          background: $mainColor;
        }
        &:last-of-type {
          background: $accentColor;
        }
      }
    }
    &--twitter {
      width: 35%;
      background: $baceColor;
      box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.3);
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
      margin-right: 15vw;
      @include headlineSet($ai: flex-end);
    }
    &--tournament {
      width: max-content;
      color: $mainColor;
      background: linear-gradient(90deg, $baceColor 80%, transparent 20%);
      font-size: 1.8rem;
      font-weight: bold;
      padding: 56px 0 192px 184px;
      position: absolute;
      top: 80px;
      left: 0;
      z-index: 2;
      @include worksAfterSet();
    }
    &--appearance {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      width: 80%;
      color: $baceColor;
      background: $mainColor;
      font-size: 1.8rem;
      font-weight: bold;
      padding: 80px 64px;
      // position: absolute;
      // top: 264px;
      // right: 0;
      @include worksAfterSet(
        $text: "出演履歴",
        $color: $mainColor,
        $l: 32px,
        $b: 40px
      );
      li {
        text-align: right;
      }
    }
  }
  &__coaching {
    padding: 88px 0 0 0;
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
      }
      &--ttl {
        color: $mainColor;
        font-size: 2rem;
        font-weight: bold;
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
      transition: 0.2s background, 0.2s box-shadow, 0.2s transform;
      transform: translateY(0);
      &:hover {
        background: $accentColor;
        box-shadow: none;
        transform: translateY(6px);
      }
    }
  }
  &__contact {
    background: $accentColor;
    padding: 104px 10vw;
    &--headline {
      @include headlineSet($ai: flex-start, $color: #fff, $bg: #fff);
    }
    &--form {
      display: block;
      // font-size: 1.6rem;
      margin-bottom: 32px;
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
      background: $baceColor;
      &::before,
      &::after {
        content: "";
        display: block;
        width: 4px;
        height: 24px;
        background: $mainColor;
      }
      &::before {
        margin: 0 5px 0 0;
        transform: rotateZ(45deg);
      }
      &::after {
        margin: 0 0 0 5px;
        transform: rotateZ(-45deg);
      }
    }
    &--contents {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      height: 104px;
      background: $mainColor;
      padding: 0 10vw;
      ul {
        display: flex;
        li {
          &:first-of-type {
            margin-right: 40px;
          }
        }
      }
      small {
        color: $baceColor;
      }
    }
  }
}
</style>
