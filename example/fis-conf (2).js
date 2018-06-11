// 编译 
fis.match('**.ts', {
	parser: 'typescript',
	// 更改后缀名称
	rExt: '.js'
})
// 编译es6
fis.match('**.es', {
	parser: 'babel2',
	rExt: '.js'
})