import Mn from 'backbone.marionette';
import ItemView from './item/view';

export default Mn.CollectionView.extend({
  childView: ItemView,
  childViewOptions: {
    className: 'col-lg-2 col-md-4 col-sm-4 col-xs-12'
  },
  className: 'list-container row'
});
