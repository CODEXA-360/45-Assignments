//Question no 1
//let message:any = "Hello Eric, would you like to learn some python today?";
//console.log(message);
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question no 1
//let  Eric = "Hello Eric,would you like to learn some pythontoday?";
//console.log(Eric);
//Question no 2
//let uppercase= "KHUSH BAKHT";
//let lowercase= "khush bakht";
//let titlecase= "Khush Bakht";
//console.log(uppercase,lowercase,titlecase);
//Question no 3
//let personName= "Eric";
//console.log('hello', personName,"would you like to learn spome python?");
//Question no 4
//let famous_person= "Quaid e Azam";
//let quote ="knowledge is the weapon";
//console.log('${famous_person}once said ,${quote}');
//Question no 4
//let famous_person: string = "Alber Ensten"; 
//const message='$(famous_person) once said , A Person who never made amistake never tried anything new';
//console.log(message);
//Quetion no 5
//let famous_person = "Alber Ensten"; 
//let message= " A Person who never made a mistake never tried anything new";
//console.log(famous_person, message);
//Question no 6
//let whitespace:any = \n\t 'Khushbakht'\t\n;
//console.log(whitespace);
//let withoutwhitespace=whitespace.trim;
//console.log(withoutwhitespace);
//Question no 7
//let sum:number = 4+4;
//let difference: number =10-2;
//let product: number=2*4;
//let remainder:number=16/2;
//console.log("Addition" ,sum);
//console.log("Subtraction" ,difference);
//console.log("Multiplication" ,product);
//console.log("Division" ,remainder);
// Question no 8
//console.log(5+3);
//console.log(11-3);
//console.log(4*2);
//console.log(16/2);
// Question no 9
//let favouritenumber:number = 100;
//console.log('My favourite number is ${favouritenumber}');
//Question 10
// Add comments=====================
//My name is Khushbakht Tousif
//Date : 06/02/24
// This program belongs to the mathematical operators in which result should come "8"========
//console.log(5+3);
//console.log(11-3);
//console.log(4*2);
//console.log(16/2);
// Question no 11
//let friends : string [] = ["khush bukht " , "Ali" , " Zara" , "Kulsum" ];
//for (let i = 0 ; i < friends.length; i ++ ) {
//console.log (friends[i]);
//}
// Question 12 
//let friends : string [] = ["khush bukht " , "Ali" , " Zara" , "Kulsum" ];
//let message : string = "You are invited for a dinner tomorrow" ;
//for (let i = 0 ; i < friends.length; i ++ ) {
//    console.log (message + friends[i]);
//}
//Question no 13
//let transportation : string [] = ["Bike" , "Ship" , "Bus" , "Aeroplane"];
//for (let i = 0; i<transportation.length; i++){
//    console.log ("I would like to own a " + transportation [i]);
//}
// Question no 14 
//let guest_list : string [] = ["Ali" , "Sara" , "Mr. Ahmed" , "Noorain"] ;
//for (let i = 0 ; i<guest_list.length; i++){
//    console.log (`Dear ${guest_list[i]}\n\n You are invited for a dinner tomorrow \n\n Thankyou.\n`);
//}
//Question no 15
//let guest_list : string [] = ["Ali" , "Sara" , "Mr. Ahmed" , "Noorain"] ;
//for (let i = 0 ; i<guest_list.length; i++){
//    console.log (`Dear ${guest_list[1]}\n\n You are invited for a dinner tomorrow \n\n Thankyou.\n`);
//}
// let not_coming : string = "Sara" ;
// let new_guest : string = "Zara" ;
// guest_list[1] = new_guest ;
// for (let i = 0 ; i<guest_list.length; i++){
//  console.log (`Dear ${guest_list[1]}\n\n You are invited for a dinner tomorrow \n\n Thankyou.\n`);
// }
// console.log(`Miss ${not_coming} , is not coming tomorrow . `);
//Question no 16
//let guest_list : string [] = ["Ali" , "Sara" , "Mr. Ahmed" , "Noorain"] ;
//for (let i = 0 ; i<guest_list.length; i++){
//   console.log (`Dear ${guest_list[1]}\n\n You are invited for a dinner tomorrow \n\n Thankyou.\n`);
//}
// let not_coming : string = "Sara" ;
//let new_guest : string = "Zara" ;
//guest_list[0] = new_guest ;
//for (let i = 0 ; i<guest_list.length; i++){
//console.log (`Dear ${guest_list[i]}\n\n You are invited for a dinner tomorrow \n\n Thankyou.\n`);
//}
//console.log(`Miss ${not_coming} , is not coming tomorrow . `);
//guest_list.unshift(`Anabiya`);
//guest_list.splice(guest_list.length/2, 2, "Hassan" );
//guest_list.push ("Zohair");
//for (let i = 0 ; i<guest_list.length; i++){
// console.log (`Dear ${guest_list[1]}\n\n You are invited for a dinner tomorrow \n\n Thankyou.\n`);
//}
//console.log("We have found a bigger table so we invited more guest");
//Question no 17
//let guest_list: string[] = ['anbya', 'tousif', 'fizza', 'shaista'];
//let not_present : string = 'tousif';
//let new_guest : string = 'Shaikh';
//guest_list[1] = new_guest;
//guest_list.unshift('sana','maryam','saira');
//console.log('\nUnfortunetly we can not arrange big table, only two peple allow') 
//while(guest_list.length>2){
// let remove_guest= guest_list.pop();
//console.log('Sorry sir/mam.${remove_guest}you are not invited for dinner.')
//}  
//for (let i=0; i<guest_list.length;i++){
// console.log('Respected Sir/MAm' + guest_list[1] + '\nwe invited you on dinner tomorrow.we found big table so we decided to invite you');
//}
//Question no 18
var places = ['Calafornia', 'faisalabad', 'Quetta', 'Iraq', 'Karachi'];
console.log('orignal:' + places);
//print alaphabatically  
console.log('copy' + __spreadArray([], places, true).sort());
// array is still in orignal order
console.log();
//printin reverse order
console.log('copy' + __spreadArray([], places, true).sort().reverse());
//array is still in order by printing again
console.log('copy' + __spreadArray([], places, true).sort().reverse());
//print that its order has changed
console.log('original:' + places.sort());
//print list show back to its order
console.log('original:' + places.sort().reverse);
