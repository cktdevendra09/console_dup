
const DASHBOARD_PREFIX = "/dashboard" ;
const PROFILE_MENU = "/profile";
const CHALLENGE_MENU = "/challenge";
const DOUBTS_MENU = "/doubts";
const TOPICS_MENU = "/topics";

export const USER_LINKS = {
  DASHBOARD: DASHBOARD_PREFIX,  
  PROFILE: DASHBOARD_PREFIX + PROFILE_MENU,  
  PORTFOLIO: DASHBOARD_PREFIX+ "/portfolio",  
  BLOGS: DASHBOARD_PREFIX + "/blogs",  
  TOPICS: DASHBOARD_PREFIX + "/article",  
  DOUBTS: DASHBOARD_PREFIX + "/doubts",  

};



export const DASHBOARD_LINKS = {
  PROFILE_ADDUPDATE: DASHBOARD_PREFIX+ PROFILE_MENU +"/add/profile",    
  EDUCATION_ADDUPDATE: DASHBOARD_PREFIX+PROFILE_MENU+"/add/education",    
  EXPERIENCE_ADDUPDATE: DASHBOARD_PREFIX+PROFILE_MENU+"/add/experience",    
  CHALLENGE_ADDNEW : DASHBOARD_PREFIX+CHALLENGE_MENU+"/add",   
  DOUBTS_ADDUPDATE : DASHBOARD_PREFIX+DOUBTS_MENU+"/create", 
  DOUBTS_DETAILS : DASHBOARD_PREFIX+DOUBTS_MENU+"/slug", 
  TOPICS_DETAILS : DASHBOARD_PREFIX+TOPICS_MENU+"/slig"
};

export const AUTH= {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  FORGOT_PASSWORD: "/auth/forgot-password",
};

export const CODING_LEARNING = {
  DAILY_CHALLENGE: "/dashboard/challenge",
  CONTESTS_HACKATHONS: "/dashboard/contest",
  PROJECTS_ASSIGNMENTS: "/dashboard/my-contests",
};

export const SETTINGS = {
  NOTIFICATION: DASHBOARD_PREFIX+"/notification",
  ACCOUNT_SETTINGS: DASHBOARD_PREFIX+"/account-settings ",
  ABOUT: "/about",
  CONTACT: "/contact",
};
