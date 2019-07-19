const picker=new Timepicker();
const container=document.getElementById('timepicker');
const pickerElm=picker.getElement();
pickerElm.style.marginLeft='calc(50% - 120px)';
pickerElm.style.marginTop='12px';
container.appendChild(pickerElm);
picker.setClockMode(true);
picker.show();
picker.onPicked=function(){
	const timeStr=document.getElementById('timeString');
	document.getElementById('visibilityHide').checked=true;
	timeStr.value=picker.getTimeString();
	timeStr.focus()
};
function pickTime(ev){
	const docWidth=document.body.offsetWidth;
	ev=ev||window.event;
	let ml=ev.pageX-136;
	if(ml+272>docWidth)ml=docWidth-272;
	if(docWidth>992)ml-=220;
	if(ml<0)ml=0;
	pickerElm.style.marginLeft=ml+'px';
	document.getElementById('modeTimepicker').checked=true;
	document.getElementById('visibilityShow').checked=true;
	picker.setClockMode(false);
	picker.show();
	(ev.target||ev.srcElement).blur()
}
function setClockMode(el){
	el.children[0].checked=true;
	picker.setClockMode(el.children[0].value=='true')
}
function set24Hour(el){
	el.children[0].checked=true;
	picker.set24Hour(el.children[0].value=='true')
}
function setLightTheme(el){
	el.children[0].checked=true;
	picker.setLightTheme(el.children[0].value=='true')
}
function setVisibility(el){
	el.children[0].checked=true;
	el.children[0].value=='show'?picker.show():picker.hide()
}
function setTime(){
	let h=document.getElementById('valHour').value;
	let m=document.getElementById('valMinute').value;
	if(h!='')picker.setHours(h);
	if(m!='')picker.setMinutes(m)
}
function setBackground(c){
	let s=container.className;
	s=s.substr(0,s.lastIndexOf('w3')+3)+c;
	container.className=s
}
function openSidebar(){
	document.getElementById("mySidebar").style.display = "block"
}
function closeSidebar(){
	document.getElementById("mySidebar").style.display = "none"
}
function dropdown(el){
	if(el.className.indexOf('expanded')==-1){
		el.className=el.className.replace('collapsed','expanded');
	}else{
		el.className=el.className.replace('expanded','collapsed')
	}
}