<template>
	<div>
        <p class="msg">{{msg}}</p>
	</div>
</template>

<script>
export default {
	name: 'APP',
	data() {
		return {
			msg: 'Hello!VUE.JS!!'
		}
	}
}
</script>

<style>
	.msg{
		color: red;
	}
</style>