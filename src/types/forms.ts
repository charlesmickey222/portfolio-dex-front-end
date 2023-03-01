/* ---------==== custom forms ====--------- */
export interface NewPostForm {
  portfolioLink:string;
  caption:string;
}

export interface NewCommentFormData {
  content:string;
}


/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface PortfolioLinkData {
  portfolioLink:string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}
