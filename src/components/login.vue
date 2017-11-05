<template>
	<div class="login-form">
		<div class="g-form">
			<p>请登录</p>
			<form method="post" action="##">
				<div class="g-form-line">
					<input type="text" name="username" placeholder="手机号/用户名/邮箱" required>
					<span class="info"></span>
				</div>
				<div class="g-form-line">
					<input type="password" name="password" placeholder="密码" required>
					<span class="info"></span>
				</div>
				<div class="g-form-line">
					<input type="submit" name="submit" value="登录">
				</div>
				<div class="g-form-line">
					<label for="check">
						<input type="checkbox" name="check" id="check">记住密码
					</label>
					<a href="##" class="a-forget">忘记密码</a>
				</div>
			</form>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				hello: 'I am a login!'
			}
		}
	}
</script>

<style type="text/css">
.g-form {
	width: 100%;
	height: auto;
}
.g-form-line{
	padding: 0px 10px;
	position: relative;
}
p {
	padding: 10px 10px 15px 10px;
	font-size: 14px;
}
.g-form-line > input {
	box-sizing: border-box;
	padding: 8px 10px;
	height: 36px;
	width: 100%;
	margin-bottom: 25px;
	outline: none;
	border: 1px solid #ccc;
	border-radius: 5px;
}
input[type=submit]{
	border: none;
	background: #f43499;
	color: #fff;
	font-size: 16px;
	margin-bottom: 15px;
}
input[type=submit]:hover{
	cursor: pointer;
	background: 
}
.a-forget {
	float: right;
}
.g-form-line > .info{
	position: absolute;
	top: 42px;
	color: #f00;
	font-size: 12px;
}
</style>