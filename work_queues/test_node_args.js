/** node test_node_args.js  hello hello
 * [ '/usr/local/bin/node',
 * '/Users/zhanghuayun/WebstormProjects/some-rabbit/work_queues/test_node_args.js',
 * 'hello',
 * 'hello' ]
 */

console.log(process.argv);

/** node test_node_args.js  hello hello
 * [ 'hello', 'hello' ]
 */

console.log(process.argv.slice(2));

/** node test_node_args.js  hello hello
 * 'hello hello'
 */

console.log(process.argv.slice(2).join(' '));