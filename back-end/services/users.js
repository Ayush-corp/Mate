const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getUsers(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT * FROM user_profile `
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}



async function create(user){
    const result = await db.query(
      `INSERT INTO user 
      (username, mobile, email, passwordHash, registeredAt, lastLogin) 
      VALUES 
      (${user.username}, ${user.mobile}, ${user.email}, ${user.passwordHash}, ${user.registeredAt}, ${user.lastLogin})`
    );
  
    let message = 'Error in creating user';
  
    if (result.affectedRows) {
      message = 'User created successfully';
    }
  
    return {message};
  }

async function createprofile(user){
    const result = await db.query(
      `INSERT INTO user 
      (username, firstName, middleName, lastName, mobile, email, profile_pics, instagram_url, hobbies, liked, likes, matches, bio, profile) 
      VALUES 
      (${user.username}, ${user.firstName}, ${user.middleName}, ${user.lastName}, ${user.mobile}, ${user.email}, ${user.profile_pics}, ${user.instagram_url}, ${user.hobbies}, ${user.liked}, ${user.likes}, ${user.matches}, ${user.bio}, ${user.profile})`
      );
  
    let message = 'Error in creating user';
  
    if (result.affectedRows) {
      message = 'User Profile Updated Successfully';
    }
  
    return {message};
  }

async function createprofile(user){
    const result = await db.query(
      `INSERT INTO user 
      (username, firstName, middleName, lastName, mobile, email, profile_pics, instagram_url, hobbies, liked, likes, matches, bio, profile) 
      VALUES 
      (${user.username}, ${user.firstName}, ${user.middleName}, ${user.lastName}, ${user.mobile}, ${user.email}, ${user.profile_pics}, ${user.instagram_url}, ${user.hobbies}, ${user.liked}, ${user.likes}, ${user.matches}, ${user.bio}, ${user.profile})`
      );
  
    let message = 'Error in creating user';
  
    if (result.affectedRows) {
      message = 'User Profile Updated Successfully';
    }
  
    return {message};
  }
  

module.exports = {
    getUsers,
    createprofile,
    create
}