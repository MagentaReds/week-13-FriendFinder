var fs =require("fs");

function Person(name, photo, scores){
  this.name=name;
  this.photo=photo;
  this.scores=scores;
}

Person.prototype.compareScores = function(person){
  var diff=0;
  for(var i=0; i<this.scores.length; ++i)
    diff+=Math.abs(this.scores[i] - person.scores[i]);
  return diff;
};

function FriendList(filename){
  this.fileName=filename;
  this.friends=JSON.parse('['+fs.readFileSync(filename, "utf8")+']');
}

FriendList.prototype.getFriends = function(){
  return friends;
};

FriendList.prototype.getBestFriend = function(me){
  var lowScore=9999999;
  var bestieIndex=-1;
  var temp;
  for(var i=0; i<this.friends.length; ++i){
    temp=me.compareScores(this.friends[i]);
    if(temp < lowScore){
      lowScore=temp;
      bestieIndex=i;
    }
  }

  if(bestieIndex===-1)
    return null;
  else
    return this.friends[bestieIndex];
};

FriendList.prototype.addFriend = function(person){
  this.friends.push(person);
  this.writeFile(person);
};

FriendList.prototype.writeFile = function(newFriend){
  fs.appendFile(this.fileName, ','+JSON.stringify(newFriend), function(err){
    if(err)
      throw err;
    console.log("File Written Successfully");
  });
}

module.exports = {
  Person: Person,
  FriendList: FriendList
};