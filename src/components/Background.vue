<template>
<div id="container">
  <div id="container-inside" v-bind:class="{ show: needAnimation() }">
    <div id="circle-small"></div>
    <div id="circle-medium"></div>
    <div id="circle-large"></div>
    <div id="circle-xlarge"></div>
    <div id="circle-xxlarge"></div>
  </div>
</div>
</template>


<script>
  export default {
    props: {},
    computed: {},
    methods: {
      needAnimation() {
        return this.$route.path === '/'
      },
    }
  }
</script>

<style scoped>
#container{
  /*background: #f1f3f7;*/
  /*background: linear-gradient(-45deg, rgba(43,40,127,1) 0%, rgba(87,81,255,1) 50%, rgba(110,81,255,1) 100%);*/
  background: linear-gradient(0deg, rgba(84,86,255,1) 0%, rgba(95,91,255,1) 28%, rgba(101,94,255,1) 50%, rgba(128,103,254,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00adef', endColorstr='#0076e5',GradientType=1 );
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0px auto;
  padding: 0px auto;
}

#container-inside {
  position: relative;
  width: 100%;
  height: auto;
  height: 100%;
  margin: 0px auto;
  padding: 0px auto;
  overflow: visible;
  opacity: 0;
  transition: opacity 1s;
}
#container-inside.show {
  opacity: 1;
}


#circle-small {
  -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation: circle-small-scale 3s ease-in-out infinite alternate;
	animation-timing-function: cubic-bezier(.6, 0, .4, 1);
	animation-delay: 0s;
	position: absolute;
	top: 20.5vh;
	left: 15.1vw;
  background: #fff;
  width: 45vh;
  height: 45vh;
  border-radius: 50%;
  opacity: 0.4;
}

#circle-medium {
  -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation: circle-small-scale 3s ease-in-out infinite alternate;
	animation-timing-function: cubic-bezier(.6, 0, .4, 1);
	animation-delay: 0.3s;
	position: absolute;
	top: 12.5vh;
	left: 11.4vw;
  background: #fff;
  width: 60vh;
  height: 60vh;
  border-radius: 50%;
  opacity: 0.3;
}

#circle-large {
  -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation: circle-small-scale 3s ease-in-out infinite alternate;
	animation-timing-function: cubic-bezier(.6, 0, .4, 1);
	animation-delay: 0.6s;
	position: absolute;
	top: 2vh;
	left: 6.5vw;
  background: #fff;
  width: 80vh;
  height: 80vh;
  border-radius: 50%;
  opacity: 0.2;
}

#circle-xlarge {
  -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation: circle-small-scale 3s ease-in-out infinite alternate;
	animation-timing-function: cubic-bezier(.6, 0, .4, 1);
	animation-delay: 0.9s;
	position: absolute;
	top: -13vh;
	left: -0.5vw;
  background: #fff;
  width: 110vh;
  height: 110vh;
  border-radius: 50%;
  opacity: 0.1;
}

#circle-xxlarge {
  -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
  animation: circle-small-scale 3s ease-in-out infinite alternate;
	animation-timing-function: cubic-bezier(.6, 0, .4, 1);
	animation-delay: 1.2s;
	position: absolute;
	top: -28.5vh;
	left: -7.5vw;
  background: #fff;
  width: 140vh;
  height: 140vh;
  border-radius: 50%;
  opacity: 0.05;
}

@-webkit-keyframes circle-small-scale {
  0% {
    -webkit-transform: scale(1.0);
  }
  100% {
    -webkit-transform: scale(1.1);
  }
}

@keyframes circle-small-scale {
  0% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
