import Mn from 'backbone.marionette';
import moment from 'moment';
import 'moment-timezone';

import Template from './template.hbs';

export default Mn.View.extend({
  template: Template,

  initialize(options) {
    this.props = Object.assign({}, options);
    this.model = this.props.model;
    this.app = this.props.app;
    this.model.on('sync', this.render);
  },

  onRender(){
    /* const self = this;
    this.parameterModel = new ParameterModel();
    this.parameterModel.fetch({
      data: { keyParameter: 'minimum_priority'},
      success(response) {
        self.parameterModel = response.toJSON();
      }
    }); */
  },

  serializeData() {
    return {
      fromNow: moment(this.model.attributes.date, "YYYYMMDD h:mm:ss a").fromNow()
    };
  }
});
