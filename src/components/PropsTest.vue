<template>
	<div>
		<h1>我是Props参数传递测试!</h1>
		<fieldset>
			<legend>参数框</legend>
			<ul>
				<li>Name:{{name}}</li>
				<!-- <li>Age:{{age}}</li> -->
				<!-- <li>Sex:{{sex}}</li> -->
			</ul>
		</fieldset>
	</div>
</template>
<script>
export default {
	props: ['name']
}
</script>