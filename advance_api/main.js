async function main(){
  let data = await fetch('https://api.github.com/users/waliderprint69');
  let mainData= await data.json();
  try {
    console.log(mainData.followers);
  } catch (error) {
    console.log(error);
  }
};
main();