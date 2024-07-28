define(['knockout', 'ojs/ojcontext', 'ojs/ojknockout', 'ojs/ojfilmstrip', 'ojs/ojpagingcontrol'],
    function(ko, Context)
    {     
        var ViewModel = function(moduleParams)
        {
          this.pagingModel = ko.observable(null);
          this.chemicals = [
              { name: 'Hydrogen' },
              { name: 'Helium' },
              { name: 'Lithium' },
              { name: 'Beryllium' },
              { name: 'Boron' },
              { name: 'Carbon' },
              { name: 'Nitrogen' },
              { name: 'Oxygen' },
              { name: 'Fluorine' },
              { name: 'Neon' },
              { name: 'Sodium' },
              { name: 'Magnesium' }
          ];
          
          this.getItemInitialDisplay = function(index)
          {
            return index < 3 ? '' : 'none';
          };
          
          this.transitionCompleted = function(info)
          {
            var filmStrip = document.getElementById('filmStrip');
            var busyContext = Context.getContext(filmStrip).getBusyContext();
            busyContext.whenReady().then(function ()
            {
              // Set the Paging Control pagingModel
              this.pagingModel(filmStrip.getPagingModel());
            }.bind(this));
          }.bind(this);
        }
    
        return ViewModel;
    });