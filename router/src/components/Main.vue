<template>
	<div>
		<h1>我是main页面！！</h1>
		<router-link :to="{name:'sub1'}">sub1</router-link> | 
		<router-link :to="{name:'sub2'}">sub2</router-link>
		<router-view></router-view>
	</div>
</template>