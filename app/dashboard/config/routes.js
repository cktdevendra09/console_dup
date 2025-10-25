
const DASHBOARD_PREFIX = "/dashboard" ;
const PROFILE_MENU = "/profile";
const CHALLENGE_MENU = "/challenge";

export const USER_LINKS = {
  DASHBOARD: DASHBOARD_PREFIX,  
  PROFILE: DASHBOARD_PREFIX + PROFILE_MENU,  
  PORTFOLIO: DASHBOARD_PREFIX+ "/portfolio",  
  BLOGS: DASHBOARD_PREFIX + "/blogs",  
  TOPICS: DASHBOARD_PREFIX + "/topics",  
};



export const DASHBOARD_LINKS = {
  PROFILE_ADDUPDATE: DASHBOARD_PREFIX+ PROFILE_MENU +"/add/profile",    
  EDUCATION_ADDUPDATE: DASHBOARD_PREFIX+PROFILE_MENU+"/add/education",    
  EXPERIENCE_ADDUPDATE: DASHBOARD_PREFIX+PROFILE_MENU+"/add/experience",    

  CHALLENGE_ADDNEW : DASHBOARD_PREFIX+CHALLENGE_MENU+"/add",    
};






export const AUTH= {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  FORGOT_PASSWORD: "/auth/forgot-password",
};

export const CODING_LEARNING = {
  DAILY_CHALLENGE: "/dashboard/challenge",
  CONTESTS_HACKATHONS: "/dashboard/contests",
  PROJECTS_ASSIGNMENTS: "/dashboard/projects-assignments",
};

// export const OTHER_LINKS = {
//   HOME: "/",
//   ABOUT: "/about",
//   CONTACT: "/contact",
// };
