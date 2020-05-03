import axios from 'axios';

export default axios.create ({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
       Authorization: 'Bearer 8-xJGt87SsamcK0a2Lw0Y3UWcmPFOswQKWpUszzXnRO3igZBe6GmL5qBh6Laq7fuzeFhTBGT9IweDOqFu-FST_TElqsjvxT6WNY6aiZA-39_FAVtJxWRFMCsB6StXnYx '
   } 
});
