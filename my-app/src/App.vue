<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,h1,h2,h3,h4,h5,h6,p,ul,ol,dl,dd,td,input,select,option,textarea{
	margin:0;
	padding:0;
}
body{
	font-family:"微软雅黑";
}
ul,ol{
	list-style:none;
}
a{
	text-decoration:none;
}
img{
	border:none;
	display: block;
}
html{
  font-size: 26.67vw;
}
</style>
