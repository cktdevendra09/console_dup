
const DASHBOARD_PREFIX = "/dashboard" ;

export const USER_LINKS = {
  DASHBOARD: DASHBOARD_PREFIX,  
  PROFILE: DASHBOARD_PREFIX + "/personal-information",  
  PORTFOLIO: DASHBOARD_PREFIX+ "/portfolio",  
  BLOGS: DASHBOARD_PREFIX + "/blogs",  
  TOPICS: DASHBOARD_PREFIX + "/topics",  
};


export const DASHBOARD_LINKS = {
  PROFILE_ADDUPDATE: DASHBOARD_PREFIX+"/personal-information/add/profile",    
  EDUCATION_ADDUPDATE: DASHBOARD_PREFIX+"/personal-information/add/education",    
  EXPERIENCE_ADDUPDATE: DASHBOARD_PREFIX+"/personal-information/add/experience",    
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
