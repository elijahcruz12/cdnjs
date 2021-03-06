System.register("ng2-formly/src/services/field.base", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var FieldBase;
  return {
    setters: [],
    execute: function() {
      FieldBase = (function() {
        function FieldBase(options) {
          if (options === void 0) {
            options = {};
          }
          this.templateOptions = options.templateOptions || {};
          this.key = options.key || "";
        }
        return FieldBase;
      }());
      exports_1("FieldBase", FieldBase);
    }
  };
});

System.register("ng2-formly/src/components/formly.form", ["@angular/core", "@angular/common", "./formly.field", "./../services/control.service", "./../services/formly.event.emitter", "./formly.common.component"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      common_1,
      formly_field_1,
      control_service_1,
      formly_event_emitter_1,
      formly_common_component_1;
  var FormlyForm;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(common_1_1) {
      common_1 = common_1_1;
    }, function(formly_field_1_1) {
      formly_field_1 = formly_field_1_1;
    }, function(control_service_1_1) {
      control_service_1 = control_service_1_1;
    }, function(formly_event_emitter_1_1) {
      formly_event_emitter_1 = formly_event_emitter_1_1;
    }, function(formly_common_component_1_1) {
      formly_common_component_1 = formly_common_component_1_1;
    }],
    execute: function() {
      FormlyForm = (function(_super) {
        __extends(FormlyForm, _super);
        function FormlyForm(_cs, _fm, ps) {
          _super.call(this);
          this._cs = _cs;
          this._fm = _fm;
          this.ps = ps;
          this.event = new formly_event_emitter_1.FormlyEventEmitter();
        }
        FormlyForm.prototype.ngOnInit = function() {
          var _this = this;
          if (!this.model) {
            this.model = {};
          }
          this.form = this._cs.toControlGroup(this.fields, this.model, undefined, undefined);
          if (this.changeEmitter) {
            this.changeEmitter.subscribe(function(info) {
              if (info.model) {
                _this.model = info.model;
              }
              if (info.fields) {
                _this.fields = info.fields;
              }
              _this.form = _this._cs.toControlGroup(_this.fields, _this.model, undefined, undefined);
              _this.ps.Stream.emit(_this.form);
            });
          }
          this.event.subscribe(function(info) {
            _this.form = _this._cs.toControlGroup(_this.fields, _this.model, info.key, info.value);
            _this.ps.Stream.emit(_this.form);
          });
        };
        FormlyForm.prototype.changeFunction = function(value, field) {
          this.model[field.key] = value;
          this.formSubmit.emit(value);
        };
        __decorate([core_1.Input(), __metadata('design:type', Object)], FormlyForm.prototype, "fields", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], FormlyForm.prototype, "changeEmitter", void 0);
        __decorate([core_1.Input(), __metadata('design:type', common_1.ControlGroup)], FormlyForm.prototype, "form", void 0);
        FormlyForm = __decorate([core_1.Component({
          selector: "formly-form",
          directives: [formly_field_1.FormlyField],
          template: "\n        <form class=\"formly\"\n            role=\"form\" novalidate [ngFormModel]=\"form\">\n            <div class=\"formly-field\"\n                *ngFor=\"let field of fields\"\n                [ngClass]=\"field.className\">\n                <formly-field [model]=\"model\" [key]=\"field.key\" [form]=\"form\" [field]=\"field\" (changeFn)=\"changeFunction($event, field)\" [eventEmitter]=\"event\"></formly-field>\n            </div>\n            <ng-content></ng-content>\n        </form>\n    ",
          providers: [common_1.NgFormModel, formly_event_emitter_1.FormlyPubSub, control_service_1.ControlService]
        }), __metadata('design:paramtypes', [control_service_1.ControlService, common_1.NgFormModel, formly_event_emitter_1.FormlyPubSub])], FormlyForm);
        return FormlyForm;
      }(formly_common_component_1.FormlyCommon));
      exports_1("FormlyForm", FormlyForm);
    }
  };
});

System.register("ng2-formly/src/services/control.service", ["@angular/core", "@angular/common"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      common_1;
  var ControlService;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(common_1_1) {
      common_1 = common_1_1;
    }],
    execute: function() {
      ControlService = (function() {
        function ControlService(_fb) {
          this._fb = _fb;
        }
        ControlService.prototype.toControlGroup = function(fields, model, key, value) {
          var _this = this;
          var group = {};
          fields.forEach(function(field) {
            if (!field.template && !field.fieldGroup) {
              group[field.key] = getControlGroup(_this._fb, field);
            } else if (field.fieldGroup) {
              field.fieldGroup.forEach(function(f) {
                group[f.key] = getControlGroup(_this._fb, f);
              });
            }
          });
          function getControlGroup(formBuilder, field) {
            var control;
            if (field.type === "radio") {
              var group_1 = {};
              field.templateOptions.options.forEach(function(option) {
                group_1[option.key] = [new common_1.RadioButtonState(model[field.key] === option.value, option.key)];
              });
              control = formBuilder.group(group_1);
            } else if (field.type === "multicheckbox") {
              var group_2 = {};
              field.templateOptions.options.forEach(function(option) {
                group_2[option.key] = [model[field.key] ? model[field.key][option.key] : undefined];
              });
              control = formBuilder.group(group_2);
            } else if (field.type === "checkbox") {
              control = [(model[field.key] ? "on" : undefined), field.key === key && value ? undefined : field.validation];
            } else {
              control = [model[field.key] || "", field.key === key && value ? undefined : field.validation];
            }
            return control;
          }
          return this._fb.group(group);
        };
        ControlService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [common_1.FormBuilder])], ControlService);
        return ControlService;
      }());
      exports_1("ControlService", ControlService);
    }
  };
});

System.register("ng2-formly/src/services/formly.providers", ["./control.service", "./formly.event.emitter", "./formly.messages"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var control_service_1,
      formly_event_emitter_1,
      formly_messages_1;
  var FormlyProviders;
  return {
    setters: [function(control_service_1_1) {
      control_service_1 = control_service_1_1;
    }, function(formly_event_emitter_1_1) {
      formly_event_emitter_1 = formly_event_emitter_1_1;
    }, function(formly_messages_1_1) {
      formly_messages_1 = formly_messages_1_1;
    }],
    execute: function() {
      exports_1("FormlyProviders", FormlyProviders = [control_service_1.ControlService, formly_event_emitter_1.FormlyPubSub, formly_messages_1.FormlyMessages]);
    }
  };
});

System.register("ng2-formly/src/main", ["./services/field.base", "./services/formly.config", "./services/formly.event.emitter", "./services/control.service", "./services/formly.messages", "./components/formly.common.component", "./components/formly.form", "./components/formly.field", "./services/formly.field.visibility", "./services/formly.providers"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [function(field_base_1_1) {
      exports_1({"FieldBase": field_base_1_1["FieldBase"]});
    }, function(formly_config_1_1) {
      exports_1({"FormlyConfig": formly_config_1_1["FormlyConfig"]});
    }, function(formly_event_emitter_1_1) {
      exports_1({
        "FormlyPubSub": formly_event_emitter_1_1["FormlyPubSub"],
        "FormlyEventEmitter": formly_event_emitter_1_1["FormlyEventEmitter"]
      });
    }, function(control_service_1_1) {
      exports_1({"ControlService": control_service_1_1["ControlService"]});
    }, function(formly_messages_1_1) {
      exports_1({
        "FormlyMessage": formly_messages_1_1["FormlyMessage"],
        "FormlyMessages": formly_messages_1_1["FormlyMessages"]
      });
    }, function(formly_common_component_1_1) {
      exports_1({"FormlyCommon": formly_common_component_1_1["FormlyCommon"]});
    }, function(formly_form_1_1) {
      exports_1({"FormlyForm": formly_form_1_1["FormlyForm"]});
    }, function(formly_field_1_1) {
      exports_1({"FormlyField": formly_field_1_1["FormlyField"]});
    }, function(formly_field_visibility_1_1) {
      exports_1({"FormlyFieldVisibilityDelegate": formly_field_visibility_1_1["FormlyFieldVisibilityDelegate"]});
    }, function(formly_providers_1_1) {
      exports_1({"FormlyProviders": formly_providers_1_1["FormlyProviders"]});
    }],
    execute: function() {}
  };
});

System.register("ng2-formly/src/components/formly.common.component", ["@angular/core"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1;
  var FormlyCommon;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }],
    execute: function() {
      FormlyCommon = (function() {
        function FormlyCommon() {
          this.formSubmit = new core_1.EventEmitter();
        }
        FormlyCommon.prototype.changeFunction = function(value, field) {
          this.model[field.key] = value;
          this.formSubmit.emit(value);
        };
        __decorate([core_1.Input(), __metadata('design:type', Object)], FormlyCommon.prototype, "model", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], FormlyCommon.prototype, "formSubmit", void 0);
        return FormlyCommon;
      }());
      exports_1("FormlyCommon", FormlyCommon);
    }
  };
});

System.register("ng2-formly/src/services/formly.config", ["@angular/core"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1;
  var FormlyConfig;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }],
    execute: function() {
      FormlyConfig = (function() {
        function FormlyConfig() {
          this.types = {};
        }
        FormlyConfig.prototype.setType = function(options) {
          this.types[options.name] = options.component;
        };
        FormlyConfig.prototype.getDirectives = function() {
          return this.types;
        };
        FormlyConfig = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], FormlyConfig);
        return FormlyConfig;
      }());
      exports_1("FormlyConfig", FormlyConfig);
    }
  };
});

System.register("ng2-formly/src/services/formly.field.visibility", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var FormlyFieldVisibilityDelegate;
  return {
    setters: [],
    execute: function() {
      FormlyFieldVisibilityDelegate = (function() {
        function FormlyFieldVisibilityDelegate(formlyField) {
          this.formlyField = formlyField;
        }
        FormlyFieldVisibilityDelegate.prototype.eval = function(expression) {
          if (expression instanceof Function) {
            return expression();
          } else if (typeof expression === "string") {
            return new Function("return " + expression + ";").call({model: this.formlyField.model});
          } else {
            return expression ? true : false;
          }
        };
        FormlyFieldVisibilityDelegate.prototype.hasHideExpression = function() {
          return this.formlyField.field.hideExpression !== undefined && this.formlyField.field.hideExpression;
        };
        FormlyFieldVisibilityDelegate.prototype.checkVisibilityChange = function() {
          var hideExpressionResult = this.eval(this.formlyField.field.hideExpression);
          if (hideExpressionResult !== this.formlyField.isHidden()) {
            this.formlyField.setHidden(hideExpressionResult);
          }
        };
        return FormlyFieldVisibilityDelegate;
      }());
      exports_1("FormlyFieldVisibilityDelegate", FormlyFieldVisibilityDelegate);
    }
  };
});

System.register("ng2-formly/src/components/formly.field", ["@angular/core", "./formly.common.component", "../services/formly.config", "../services/formly.event.emitter", "../services/formly.field.visibility"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      formly_common_component_1,
      formly_config_1,
      formly_event_emitter_1,
      formly_field_visibility_1;
  var DivComponent,
      FormlyField;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(formly_common_component_1_1) {
      formly_common_component_1 = formly_common_component_1_1;
    }, function(formly_config_1_1) {
      formly_config_1 = formly_config_1_1;
    }, function(formly_event_emitter_1_1) {
      formly_event_emitter_1 = formly_event_emitter_1_1;
    }, function(formly_field_visibility_1_1) {
      formly_field_visibility_1 = formly_field_visibility_1_1;
    }],
    execute: function() {
      DivComponent = (function() {
        function DivComponent(viewContainer) {
          this.viewContainer = viewContainer;
        }
        DivComponent = __decorate([core_1.Directive({selector: "[child-host]"}), __metadata('design:paramtypes', [core_1.ViewContainerRef])], DivComponent);
        return DivComponent;
      }());
      exports_1("DivComponent", DivComponent);
      FormlyField = (function(_super) {
        __extends(FormlyField, _super);
        function FormlyField(dcl, elem, fc, ps) {
          _super.call(this);
          this.dcl = dcl;
          this.elem = elem;
          this.ps = ps;
          this.changeFn = new core_1.EventEmitter();
          this.directives = fc.getDirectives();
          this.visibilityDelegate = new formly_field_visibility_1.FormlyFieldVisibilityDelegate(this);
        }
        FormlyField.prototype.ngAfterViewInit = function() {
          var _this = this;
          this.hide = this.field.hideExpression ? true : false;
          if (!this.field.template && !this.field.fieldGroup) {
            this.update = new formly_event_emitter_1.FormlyEventEmitter();
            this.ps.setEmitter(this.key, this.update);
            this.dcl.loadNextToLocation(this.directives[this.field.type], this.myChild.viewContainer).then(function(ref) {
              ref.instance.model = _this.model[_this.field.key];
              ref.instance.type = _this.field.type;
              ref.instance.options = _this.field.templateOptions;
              ref.instance.changeFn.subscribe(function(value) {
                _this.changeFn.emit(value);
              });
              ref.instance.key = _this.key;
              ref.instance.form = _this.form;
              ref.instance.update = _this.update;
            });
          }
        };
        FormlyField.prototype.isHidden = function() {
          return this.hide;
        };
        FormlyField.prototype.setHidden = function(cond) {
          this.hide = cond;
          this.elem.nativeElement.style.display = cond ? "none" : "";
          if (this.field.fieldGroup) {
            for (var i = 0; i < this.field.fieldGroup.length; i++) {
              this.psEmit(this.field.fieldGroup[i].key, "hidden", this.hide);
            }
          } else {
            this.psEmit(this.field.key, "hidden", this.hide);
          }
          this.eventEmitter.emit({
            key: this.field.key,
            value: this.hide
          });
        };
        FormlyField.prototype.ngDoCheck = function() {
          this.visibilityDelegate.checkVisibilityChange();
        };
        FormlyField.prototype.psEmit = function(fieldKey, eventKey, value) {
          if (this.ps && this.ps.getEmitter(fieldKey) && this.ps.getEmitter(fieldKey).emit) {
            this.ps.getEmitter(fieldKey).emit({
              key: eventKey,
              value: value
            });
          }
        };
        __decorate([core_1.Input(), __metadata('design:type', Object)], FormlyField.prototype, "model", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], FormlyField.prototype, "key", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], FormlyField.prototype, "form", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], FormlyField.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], FormlyField.prototype, "eventEmitter", void 0);
        __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], FormlyField.prototype, "changeFn", void 0);
        __decorate([core_1.ViewChild(DivComponent), __metadata('design:type', DivComponent)], FormlyField.prototype, "myChild", void 0);
        FormlyField = __decorate([core_1.Component({
          selector: "formly-field",
          template: "\n        <div child-host #child></div>\n        <div *ngIf=\"field.template\" [innerHtml]=\"field.template\"></div>\n         <div class=\"formly-field\"\n            *ngFor=\"let f of field.fieldGroup\">\n            <formly-field [hide]=\"f.hideExpression\" [model]=\"model\" [key]=\"f.key\" [form]=\"form\" [field]=\"f\" (changeFn)=\"changeFunction($event, f)\" [ngClass]=\"f.className\" [eventEmitter]=\"eventEmitter\"></formly-field>\n        </div> \n    ",
          directives: [FormlyField, DivComponent]
        }), __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ElementRef, formly_config_1.FormlyConfig, formly_event_emitter_1.FormlyPubSub])], FormlyField);
        return FormlyField;
      }(formly_common_component_1.FormlyCommon));
      exports_1("FormlyField", FormlyField);
    }
  };
});

System.register("ng2-formly/src/templates/formlyfield.input", ["@angular/core", "./../services/formly.messages", "./../services/formly.event.emitter", "./field"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      formly_messages_1,
      formly_event_emitter_1,
      field_1;
  var FormlyFieldInput;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(formly_messages_1_1) {
      formly_messages_1 = formly_messages_1_1;
    }, function(formly_event_emitter_1_1) {
      formly_event_emitter_1 = formly_event_emitter_1_1;
    }, function(field_1_1) {
      field_1 = field_1_1;
    }],
    execute: function() {
      FormlyFieldInput = (function(_super) {
        __extends(FormlyFieldInput, _super);
        function FormlyFieldInput(fm, ps, elem) {
          _super.call(this, fm, ps);
          this.elem = elem;
        }
        FormlyFieldInput.prototype.ngAfterViewInit = function() {
          if (this.options.focus) {
            this.elem.nativeElement.querySelector("input").focus();
          }
        };
        FormlyFieldInput = __decorate([core_1.Component({
          selector: "formly-field-input",
          template: "\n        <div class=\"form-group\" [ngFormModel]=\"form\" [ngClass]=\"{'has-danger': !form.controls[key].valid}\">\n            <label attr.for=\"{{key}}\" class=\"form-control-label\">{{options.label}}</label>\n            <input type=\"{{options.type}}\" [ngControl]=\"key\" class=\"form-control\" id=\"{{key}}\" placeholder=\"{{options.placeholder}}\" [disabled]=\"options.disabled\" (keyup)=\"inputChange($event, 'value')\" (change)=\"inputChange($event, 'value')\" *ngIf=\"!options.hidden\" [ngClass]=\"{'form-control-danger': !form.controls[key].valid}\">\n            <small class=\"text-muted\">{{options.description}}</small>\n            <small class=\"text-muted text-danger\"><formly-message [control]=\"key\"></formly-message></small>\n        </div>\n    ",
          directives: [formly_messages_1.FormlyMessage]
        }), __metadata('design:paramtypes', [formly_messages_1.FormlyMessages, formly_event_emitter_1.FormlyPubSub, core_1.ElementRef])], FormlyFieldInput);
        return FormlyFieldInput;
      }(field_1.Field));
      exports_1("FormlyFieldInput", FormlyFieldInput);
    }
  };
});

System.register("ng2-formly/src/templates/formlyfield.checkbox", ["@angular/core", "./field", "./../services/formly.messages", "./../services/formly.event.emitter"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      field_1,
      formly_messages_1,
      formly_event_emitter_1;
  var FormlyFieldCheckbox;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(field_1_1) {
      field_1 = field_1_1;
    }, function(formly_messages_1_1) {
      formly_messages_1 = formly_messages_1_1;
    }, function(formly_event_emitter_1_1) {
      formly_event_emitter_1 = formly_event_emitter_1_1;
    }],
    execute: function() {
      FormlyFieldCheckbox = (function(_super) {
        __extends(FormlyFieldCheckbox, _super);
        function FormlyFieldCheckbox(fm, ps) {
          _super.call(this, fm, ps);
        }
        FormlyFieldCheckbox = __decorate([core_1.Component({
          selector: "formly-field-checkbox",
          template: "\n      <div class=\"form-group\">\n          <div [ngFormModel]=\"form\">\n              <label class=\"c-input c-checkbox\">\n                  <input type=\"checkbox\" [ngControl]=\"key\" (change)=\"inputChange($event, 'checked')\" value=\"on\"> {{options.label}}\n                  <span class=\"c-indicator\"></span>\n              </label>\n          </div>\n          <small class=\"text-muted\">{{options.description}}</small>\n      </div>\n    "
        }), __metadata('design:paramtypes', [formly_messages_1.FormlyMessages, formly_event_emitter_1.FormlyPubSub])], FormlyFieldCheckbox);
        return FormlyFieldCheckbox;
      }(field_1.Field));
      exports_1("FormlyFieldCheckbox", FormlyFieldCheckbox);
    }
  };
});

System.register("ng2-formly/src/templates/formlyfield.radio", ["@angular/core", "../services/formly.event.emitter", "../services/formly.messages", "./field"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      formly_event_emitter_1,
      formly_messages_1,
      field_1;
  var FormlyFieldRadio;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(formly_event_emitter_1_1) {
      formly_event_emitter_1 = formly_event_emitter_1_1;
    }, function(formly_messages_1_1) {
      formly_messages_1 = formly_messages_1_1;
    }, function(field_1_1) {
      field_1 = field_1_1;
    }],
    execute: function() {
      FormlyFieldRadio = (function(_super) {
        __extends(FormlyFieldRadio, _super);
        function FormlyFieldRadio(fm, ps) {
          _super.call(this, fm, ps);
        }
        FormlyFieldRadio = __decorate([core_1.Component({
          selector: "formly-field-radio",
          template: "\n        <div [ngFormModel]=\"form\">\n            <div [ngControlGroup]=\"key\" class=\"form-group\">\n                <label class=\"form-control-label\" for=\"\">{{options.label}}</label>\n                <div *ngFor=\"let option of options.options\">\n                    <label class=\"c-input c-radio\">\n                        <input type=\"radio\" name=\"choose\" value=\"{{option.value}}\" [ngControl]=\"option.key\" (change)=\"inputChange($event, 'value')\">{{option.value}}\n                        <span class=\"c-indicator\"></span>\n                    </label>\n                </div>\n                <small class=\"text-muted\">{{options.description}}</small>\n            </div>\n        </div>\n    "
        }), __metadata('design:paramtypes', [formly_messages_1.FormlyMessages, formly_event_emitter_1.FormlyPubSub])], FormlyFieldRadio);
        return FormlyFieldRadio;
      }(field_1.Field));
      exports_1("FormlyFieldRadio", FormlyFieldRadio);
    }
  };
});

System.register("ng2-formly/src/templates/formlyfield.select", ["@angular/core", "../services/formly.event.emitter", "../services/formly.messages", "./field"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      formly_event_emitter_1,
      formly_messages_1,
      field_1;
  var FormlyFieldSelect;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(formly_event_emitter_1_1) {
      formly_event_emitter_1 = formly_event_emitter_1_1;
    }, function(formly_messages_1_1) {
      formly_messages_1 = formly_messages_1_1;
    }, function(field_1_1) {
      field_1 = field_1_1;
    }],
    execute: function() {
      FormlyFieldSelect = (function(_super) {
        __extends(FormlyFieldSelect, _super);
        function FormlyFieldSelect(fm, ps) {
          _super.call(this, fm, ps);
        }
        FormlyFieldSelect = __decorate([core_1.Component({
          selector: "formly-field-select",
          template: "\n        <div class=\"select\" [ngFormModel]=\"form\">\n            <label for=\"\" class=\"form-control-label\">{{options.label}}</label>\n            <select [id]=\"key\" [ngControl]=\"key\" (change)=\"inputChange($event, 'value')\" class=\"c-select\">\n                <option value=\"\" *ngIf=\"options.placeholder\">{{options.placeholder}}</option>\n                <option *ngFor=\"let opt of options.options\" [value]=\"opt.value\">{{opt.label}}</option>\n            </select>\n            <small class=\"text-muted\">{{options.description}}</small>\n        </div>\n    "
        }), __metadata('design:paramtypes', [formly_messages_1.FormlyMessages, formly_event_emitter_1.FormlyPubSub])], FormlyFieldSelect);
        return FormlyFieldSelect;
      }(field_1.Field));
      exports_1("FormlyFieldSelect", FormlyFieldSelect);
    }
  };
});

System.register("ng2-formly/src/templates/formlyfield.textarea", ["@angular/core", "../services/formly.event.emitter", "../services/formly.messages", "./field"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      formly_event_emitter_1,
      formly_messages_1,
      field_1;
  var FormlyFieldTextArea;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(formly_event_emitter_1_1) {
      formly_event_emitter_1 = formly_event_emitter_1_1;
    }, function(formly_messages_1_1) {
      formly_messages_1 = formly_messages_1_1;
    }, function(field_1_1) {
      field_1 = field_1_1;
    }],
    execute: function() {
      FormlyFieldTextArea = (function(_super) {
        __extends(FormlyFieldTextArea, _super);
        function FormlyFieldTextArea(fm, ps, elem) {
          _super.call(this, fm, ps);
          this.elem = elem;
        }
        FormlyFieldTextArea.prototype.ngAfterViewInit = function() {
          if (this.options.focus) {
            this.elem.nativeElement.querySelector("textarea").focus();
          }
        };
        FormlyFieldTextArea = __decorate([core_1.Component({
          selector: "formly-field-textarea",
          template: "\n    <fieldset class=\"form-group\" [ngFormModel]=\"form\">\n        <label attr.for=\"{{key}}\">{{options.label}}</label>\n        <textarea name=\"{{key}}\" [ngControl]=\"key\" id=\"{{key}}\" cols=\"{{options.cols}}\" rows=\"{{options.rows}}\" (change)=\"inputChange($event, 'value')\" (keyup)=\"inputChange($event, 'value')\" placeholder=\"{{options.placeholder}}\" class=\"form-control\"></textarea>\n        <small class=\"text-muted\">{{options.description}}</small>\n    </fieldset>"
        }), __metadata('design:paramtypes', [formly_messages_1.FormlyMessages, formly_event_emitter_1.FormlyPubSub, core_1.ElementRef])], FormlyFieldTextArea);
        return FormlyFieldTextArea;
      }(field_1.Field));
      exports_1("FormlyFieldTextArea", FormlyFieldTextArea);
    }
  };
});

System.register("ng2-formly/src/services/formly.event.emitter", ["rxjs/Subject"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1;
  var FormlyEventEmitter,
      FormlyPubSub;
  return {
    setters: [function(Subject_1_1) {
      Subject_1 = Subject_1_1;
    }],
    execute: function() {
      FormlyEventEmitter = (function(_super) {
        __extends(FormlyEventEmitter, _super);
        function FormlyEventEmitter() {
          _super.call(this);
        }
        FormlyEventEmitter.prototype.emit = function(value) {
          _super.prototype.next.call(this, value);
        };
        return FormlyEventEmitter;
      }(Subject_1.Subject));
      exports_1("FormlyEventEmitter", FormlyEventEmitter);
      FormlyPubSub = (function() {
        function FormlyPubSub() {
          this.emitters = {};
          this.updated = false;
          this.Stream = new FormlyEventEmitter();
        }
        FormlyPubSub.prototype.getUpdated = function() {
          return this.updated;
        };
        FormlyPubSub.prototype.setUpdated = function(value) {
          this.updated = value;
        };
        FormlyPubSub.prototype.setEmitter = function(key, emitter) {
          this.emitters[key] = emitter;
        };
        FormlyPubSub.prototype.getEmitter = function(key) {
          return this.emitters[key];
        };
        return FormlyPubSub;
      }());
      exports_1("FormlyPubSub", FormlyPubSub);
    }
  };
});

System.register("ng2-formly/src/services/formly.messages", ["@angular/core", "@angular/common"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1,
      common_1;
  var FormlyMessages,
      FormlyMessage;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(common_1_1) {
      common_1 = common_1_1;
    }],
    execute: function() {
      FormlyMessages = (function() {
        function FormlyMessages() {
          this.messages = {};
        }
        FormlyMessages.prototype.addStringMessage = function(validator, message) {
          this.messages[validator] = message;
        };
        FormlyMessages.prototype.getMessages = function() {
          return this.messages;
        };
        FormlyMessages.prototype.getValidatorErrorMessage = function(prop) {
          return this.messages[prop];
        };
        FormlyMessages = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], FormlyMessages);
        return FormlyMessages;
      }());
      exports_1("FormlyMessages", FormlyMessages);
      FormlyMessage = (function() {
        function FormlyMessage(_formDir, fm) {
          this._formDir = _formDir;
          this.fm = fm;
        }
        Object.defineProperty(FormlyMessage.prototype, "errorMessage", {
          get: function() {
            var c = this._formDir.form.find(this.control);
            for (var propertyName in c.errors) {
              if (c.errors.hasOwnProperty(propertyName)) {
                return this.fm.getValidatorErrorMessage(propertyName);
              }
            }
            return null;
          },
          enumerable: true,
          configurable: true
        });
        __decorate([core_1.Input(), __metadata('design:type', String)], FormlyMessage.prototype, "control", void 0);
        FormlyMessage = __decorate([core_1.Component({
          selector: "formly-message",
          template: "<div *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
        }), __param(0, core_1.Host()), __metadata('design:paramtypes', [common_1.NgFormModel, FormlyMessages])], FormlyMessage);
        return FormlyMessage;
      }());
      exports_1("FormlyMessage", FormlyMessage);
    }
  };
});

System.register("ng2-formly/src/templates/field", ["@angular/core"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1;
  var Field;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }],
    execute: function() {
      Field = (function() {
        function Field(fm, ps) {
          var _this = this;
          this.ps = ps;
          this.changeFn = new core_1.EventEmitter();
          this.messages = fm.getMessages();
          this.ps.Stream.subscribe(function(form) {
            _this.form = form;
          });
        }
        Field.prototype.ngOnInit = function() {
          var _this = this;
          if (this.update) {
            this.update.subscribe(function(update) {
              _this.options[update.key] = update.value;
            });
          }
        };
        Field.prototype.inputChange = function(e, val) {
          this.changeFn.emit(e.target[val]);
          this.ps.setUpdated(true);
        };
        __decorate([core_1.Input(), __metadata('design:type', Object)], Field.prototype, "form", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], Field.prototype, "update", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], Field.prototype, "options", void 0);
        __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], Field.prototype, "changeFn", void 0);
        return Field;
      }());
      exports_1("Field", Field);
    }
  };
});

System.register("ng2-formly/src/templates/formlyfield.multicheckbox", ["@angular/core", "../services/formly.event.emitter", "../services/formly.messages", "./field"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      formly_event_emitter_1,
      formly_messages_1,
      field_1;
  var FormlyFieldMultiCheckbox;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(formly_event_emitter_1_1) {
      formly_event_emitter_1 = formly_event_emitter_1_1;
    }, function(formly_messages_1_1) {
      formly_messages_1 = formly_messages_1_1;
    }, function(field_1_1) {
      field_1 = field_1_1;
    }],
    execute: function() {
      FormlyFieldMultiCheckbox = (function(_super) {
        __extends(FormlyFieldMultiCheckbox, _super);
        function FormlyFieldMultiCheckbox(fm, fps) {
          _super.call(this, fm, fps);
          this.fps = fps;
        }
        FormlyFieldMultiCheckbox.prototype.inputChange = function(e, val) {
          this.model[val] = e.target.checked;
          this.changeFn.emit(this.model);
          this.fps.setUpdated(true);
        };
        __decorate([core_1.Input(), __metadata('design:type', Object)], FormlyFieldMultiCheckbox.prototype, "model", void 0);
        FormlyFieldMultiCheckbox = __decorate([core_1.Component({
          selector: "formly-field-multicheckbox",
          template: "\n        <div [ngFormModel]=\"form\">\n            <div [ngControlGroup]=\"key\" class=\"form-group\">\n                <label class=\"form-control-label\" for=\"\">{{options.label}}</label>\n                <div *ngFor=\"let option of options.options\">\n                    <label class=\"c-input c-radio\">\n                        <input type=\"checkbox\" name=\"choose\" value=\"{{option.value}}\" [ngControl]=\"option.key\" (change)=\"inputChange($event, option.key)\">{{option.value}}\n                        <span class=\"c-indicator\"></span>\n                    </label>\n                </div>\n                <small class=\"text-muted\">{{options.description}}</small>\n            </div>\n        </div>\n    "
        }), __metadata('design:paramtypes', [formly_messages_1.FormlyMessages, formly_event_emitter_1.FormlyPubSub])], FormlyFieldMultiCheckbox);
        return FormlyFieldMultiCheckbox;
      }(field_1.Field));
      exports_1("FormlyFieldMultiCheckbox", FormlyFieldMultiCheckbox);
    }
  };
});

System.register("ng2-formly/src/templates/templates", ["./formlyfield.input", "./formlyfield.checkbox", "./formlyfield.radio", "./formlyfield.select", "./formlyfield.textarea", "./formlyfield.multicheckbox"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var formlyfield_input_1,
      formlyfield_checkbox_1,
      formlyfield_radio_1,
      formlyfield_select_1,
      formlyfield_textarea_1,
      formlyfield_multicheckbox_1;
  var TemplateDirectives;
  return {
    setters: [function(formlyfield_input_1_1) {
      formlyfield_input_1 = formlyfield_input_1_1;
    }, function(formlyfield_checkbox_1_1) {
      formlyfield_checkbox_1 = formlyfield_checkbox_1_1;
    }, function(formlyfield_radio_1_1) {
      formlyfield_radio_1 = formlyfield_radio_1_1;
    }, function(formlyfield_select_1_1) {
      formlyfield_select_1 = formlyfield_select_1_1;
    }, function(formlyfield_textarea_1_1) {
      formlyfield_textarea_1 = formlyfield_textarea_1_1;
    }, function(formlyfield_multicheckbox_1_1) {
      formlyfield_multicheckbox_1 = formlyfield_multicheckbox_1_1;
    }],
    execute: function() {
      exports_1("TemplateDirectives", TemplateDirectives = {
        input: formlyfield_input_1.FormlyFieldInput,
        checkbox: formlyfield_checkbox_1.FormlyFieldCheckbox,
        radio: formlyfield_radio_1.FormlyFieldRadio,
        select: formlyfield_select_1.FormlyFieldSelect,
        textarea: formlyfield_textarea_1.FormlyFieldTextArea,
        multicheckbox: formlyfield_multicheckbox_1.FormlyFieldMultiCheckbox
      });
    }
  };
});

System.register("ng2-formly/src/templates", ["./templates/formlyfield.checkbox", "./templates/formlyfield.multicheckbox", "./templates/formlyfield.input", "./templates/formlyfield.radio", "./templates/formlyfield.textarea", "./templates/formlyfield.select", "./components/formly.field", "./templates/templates"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [function(formlyfield_checkbox_1_1) {
      exports_1({"FormlyFieldCheckbox": formlyfield_checkbox_1_1["FormlyFieldCheckbox"]});
    }, function(formlyfield_multicheckbox_1_1) {
      exports_1({"FormlyFieldMultiCheckbox": formlyfield_multicheckbox_1_1["FormlyFieldMultiCheckbox"]});
    }, function(formlyfield_input_1_1) {
      exports_1({"FormlyFieldInput": formlyfield_input_1_1["FormlyFieldInput"]});
    }, function(formlyfield_radio_1_1) {
      exports_1({"FormlyFieldRadio": formlyfield_radio_1_1["FormlyFieldRadio"]});
    }, function(formlyfield_textarea_1_1) {
      exports_1({"FormlyFieldTextArea": formlyfield_textarea_1_1["FormlyFieldTextArea"]});
    }, function(formlyfield_select_1_1) {
      exports_1({"FormlyFieldSelect": formlyfield_select_1_1["FormlyFieldSelect"]});
    }, function(formly_field_1_1) {
      exports_1({"FormlyField": formly_field_1_1["FormlyField"]});
    }, function(templates_1_1) {
      exports_1({"TemplateDirectives": templates_1_1["TemplateDirectives"]});
    }],
    execute: function() {}
  };
});

System.register("ng2-formly/ng2-formly", ["./src/main", "./src/templates"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function exportStar_1(m) {
    var exports = {};
    for (var n in m) {
      if (n !== "default")
        exports[n] = m[n];
    }
    exports_1(exports);
  }
  return {
    setters: [function(main_1_1) {
      exportStar_1(main_1_1);
    }, function(templates_1_1) {
      exportStar_1(templates_1_1);
    }],
    execute: function() {}
  };
});

//# sourceMappingURL=ng2-formly.js.map