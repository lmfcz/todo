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
			msg: 'Hello'
		}
	}
}
</script>

<style>
	.msg{
		color: red;
	}
</style>