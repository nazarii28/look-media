import React from 'react';
import Button from "../UI/Button";
import classes from './AccountSettings.module.sass'

const AccountSettings = () => {
  return (
    <div className={classes.AccountSettings}>
      <p className="subtitle">Edit information</p>
      <div className={classes.inputs}>
        <div>
          <label>
            Name
            <input type="text"/>
          </label>
          <label>
            Last name
            <input type="text"/>
          </label>
          <label>
            Email
            <input type="text"/>
          </label>
        </div>
        <div>
          <label>
            Company
            <input type="text"/>
          </label>
          <label>
            Country
            <input type="text"/>
          </label>
          <label>
            City
            <input type="text"/>
          </label>
        </div>
      </div>
      <Button>Save Changes</Button>
    </div>
  );
};

export default AccountSettings;