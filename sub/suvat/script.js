$("input").check(()=>{
    console.log($(this).val())
});
// $("form").submit((e)=>{
//     var s, a, v, t, u ;
//     $(this).find('[name]').each((index, value){
//         var text = $('#DynamicValueAssignedHere').find('input[name="FirstName"]').val();
//         var on9 = $(this),
//             name = that.attr('name'),
//             value = that.val();
//         //v
//         s = u*t + a*Math.pow(t,2)/2
//         a = (2*(s-u*t))/Math.pow(t,2)
//         u = (s - a*Math.pow(t,2)/2)/t
//         t = quad(a/2, u, -s)
//         //u
//         s = v*t - a*Math.pow(t,2)/2
//         v = (s + a*Math.pow(t,2)/2)/t
//         a = (2*(s+v*t))/Math.pow(t,2)
//         t = quad(-a/2, v, -s)
//         //t
//         s = (Math.pow(v,2) -Math.pow(u,2))/2/a
//         t = (Math.pow(v,2) -Math.pow(u,2))/2/s
//         v = Math.sqrt((2*a*s)+ Math.pow(u,2))
//         u = Math.sqrt((2*a*s)- Math.pow(v,2))
//         //a
//         s = (v+ u)*t/2
//         t = 2* s/(v+u)
//         v = (2* s/t)-u
//         u = (2* s/t)+v
//         //s
//         v = u + at
//         u = v-at
//         a = (v-u)/t
//         t = (v-u)/a

//         si= Math.asin(a3* Math.sin(Bangle)/b3)
//         si= b3* Math.sin(Aangle)/Math.sin(Bangle)
//         co= Math.sqrt(Math.pow(a2,2) + Math.pow(b2,2)-(2*a2*b2*Math.cos(a2angle)))
//         co= Math.acos(Math.pow(a1,2)* Math.pow(b1,2) * Math.pow(c1,2)/(2 * a* b));

//         function quad(a,b,c){
//             var x1, x2;
//             var check =  Math.pow(b3,2)- 4*a*c
//             if(check < 0){
//                 x1 = x1con+""+imgx1+"i"
//                 x2= x2con+""+imgx2+"i"
//             }else{
//                 x1= x1con +imgx1;
//                 x2 = x2con + imgx2;
//             }
//             x1con = (-b3)/2/a
//             x2con = (-b3)/2/a
//             imgx1 = (+ Math.sqrt( Math.pow(b3,2)- 4*a*c))/2/a
//             imgx2 = (- Math.sqrt( Math.pow(b3,2)- 4*a*c))/2/a
//         }
//     })
// })
