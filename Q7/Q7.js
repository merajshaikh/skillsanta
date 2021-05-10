function removeTags(str) {
    if ((str===null) || (str==='')) return false;
    else{
    str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');}
 }

 let to_convert = "<p><strong><em>SkillSanta Assignments</em></strong></p>"

 console.log(removeTags(to_convert))