
import {Category} from '../entity/Category';
import {Channel} from '../entity/Channel';

//type is page or personal

const filter_names = ['Influencer Channel','Influencer Type', 'Categories'];
const categories = [
  'Humor & Memes',
  'Fashion & Style', 
  'Fitness', 
  'Quotes & Texts', 
  'Luxury & Motivation', 
  'Cars', 
  'Motorcycles', 
  'Nature', 
  'Food & Nutrition', 
  'Animals', 
  'Models', 
  'Ambassadors & Influencers', 
  'Music & Singers', 
  'Art', 
  'Technology', 
  'Gaming', 
  'Entrepreneurship', 
  'Architecture & Interior', 
  'Fan Accounts', 
  'Celebrity', 
  'Makeup', 
  'Hair', 
  'Nails', 
  'Sports', 
  'Love & Romance', 
  'Travel', 
  'Dogs', 
  'Cats'];
const channels = ['youtube', 'instagram', 'blog'];


export const build = () => {




categories.forEach(e => {
  const category = new Category();
  category.name = e;
  category.save();
});

channels.forEach(e => {
  const channel = new Channel();
  channel.name = e;
  channel.save();
});
}