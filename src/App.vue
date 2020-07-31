<!--App.vue-->
<template>
	<div id="app">
		<nav>
			<!-- router-link标签用来指向你要去的路由路径 -->
			<router-link to="/main">main</router-link>
			<router-link to="/about">about</router-link>
			<router-link :to="`/param/Ankol`">param</router-link>
			<!-- query方式传递的为一个对象 -->
			<router-link :to="{path:'/query',query:{name:'Ankol',sex:'男',age:18}}">query</router-link>
		</nav>
		<fieldset>
			<legend>props传递</legend>
			<router-link to="/props/you">/props/you</router-link>
		</fieldset>
		<!-- 路由出口，对应的组件渲染在这里！ -->
		<router-view></router-view>
		<div>
			<fieldset>
				<legend>路由API测试</legend>
				<ul>
					<li><input type="text" v-model="push" placeholder="输入要跳转的url"><button @click="doPush()">push</button></li>
					<li><input type="text" v-model="replace" placeholder="输入要跳转的url"><button @click="doReplace()">replace</button></li>
					<li><button @click="doGo(1)">go +1</button></li>
					<li><button @click="doGo(-1)">go -1</button></li>
				</ul>
			</fieldset>
		</div>
	</div>
</template>

<script>

export default {
	name: 'app',
	data() {
		return {
			push: undefined,
			replace: undefined,
			userName: undefined,
		}
	},

	methods: {
		doPush() {
			//push方法像浏览器压入一个新的会话历史,与window.history Api类似,官方也是模仿historyAPI设计的
			console.log('push!!')
			this.$router.push(this.push);
			this.push = undefined;
		},
		doReplace() {
			//replace与push类似,不同之处在于它不是往会话栈里面压入新的历史,而是直接
			//替换当前历史!所以浏览器导航按钮不会有什么变化
			console.log('replace!!');
			this.$router.replace(this.replace);
			this.replace = undefined;
		},
		doGo(count) {
			//go方法可以操作浏览器历史的前进与后退
			console.log('go!!!');
			this.$router.go(count);
		}
	}
}
</script>
<style lang="scss">
#app {
	nav {
		a {
			margin: 0 5px;
		}
	}
	button {
		text-transform: uppercase;
	}
	a {
		text-transform: uppercase;
	}
}
</style>