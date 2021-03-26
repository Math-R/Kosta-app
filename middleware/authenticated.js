export default function (context, redirect){
  if(!context.$auth.loggedIn){
    console.log(context)
  }
}
