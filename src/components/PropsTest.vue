<template>
	<div>
		<h1>我是Props参数传递测试!</h1>
		<fieldset>
			<legend>参数框</legend>
			<ul>
				<li>Name:{{name}}</li>
			</ul>
		</fieldset>
	</div>
</template>
<script>
export default {
	props: ['name'],
	mounted() {

	},
	beforeRouteEnter(to, from, next) {
		console.log('触发beforeRouteEnter!')
		next();
	},
	beforeRouteUpdate(to, from, next) {
		console.log('触发beforeRouteUpdate')
		next();
	},
	beforeRouteLeave(to, from, next) {
		console.log('触发beforeRouteLeave');
		next();
	}
}
</script>