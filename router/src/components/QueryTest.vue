<template>
	<div>
		<h1>我是Query方法测试哦！</h1>
		<fieldset>
			<legend>参数框</legend>
			<ul>
				<li>name:{{$route.query.name}}</li>
				<li>age:{{$route.query.age}}</li>
				<li>sex:{{$route.query.sex}}</li>
			</ul>
		</fieldset>
	</div>
</template>
<script>
export default {
	/* mounted() {
		console.log('mounted Trigger')
		console.log(this.$route)
	} */
}
</script>