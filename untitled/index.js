var fromX, toX, point=[] , x , timerId
$(function() {
 $("#INPUT").click(function (e) {
 clearInterval(timerId)
 point=[]
 var from = $('.FROM').val();
 var to = $('.TO').val();
 var fun = $('.FUN').val();

 step = 0.01
 alert(fun);
 for (x = parseFloat(from); x<parseFloat(to); x+=step)
 {
    point.push([x, eval(fun)]);
 }
    $.plot($("#placeholder"), [{ label: 'y='+fun, data: point }], {});
    timerId = setInterval(() => {move(from,fun,step); },100);

 }
 );
function move(from,fun,step){
    point.splice(0, 1);
    point.push([x, eval(fun)]);
    $.plot($("#placeholder"), [{ label: 'y='+fun, data: point }], {});
    x = parseFloat(x) + parseFloat(step);
}
})


