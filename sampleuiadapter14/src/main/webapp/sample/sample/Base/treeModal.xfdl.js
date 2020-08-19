(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("treeModal");
                this.set_titletext("Base::treeModal");
                this._setFormPosition(0,0,316,311);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "40", "46", "54", "31", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Item ID");
            this.addChild(obj.name, obj);

            obj = new Edit("id", "absolute", "121", "48", "149", "24", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "39", "84", "56", "32", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Parent ID");
            this.addChild(obj.name, obj);

            obj = new Edit("parent", "absolute", "121", "84", "149", "24", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "40", "134", "32", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("text");
            this.addChild(obj.name, obj);

            obj = new Edit("text", "absolute", "121", "134", "149", "23", null, null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "38", "169", "36", "37", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Lebel");
            this.addChild(obj.name, obj);

            obj = new Edit("lvl", "absolute", "121", "176", "149", "21", null, null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "48", "252", "96", "32", null, null, this);
            obj.set_taborder("8");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "168", "252", "96", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 316, 311, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::treeModal");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("treeModal.xfdl", function(exports) {

        this.Button01_onclick = function(obj,e)
        {
        	
        }

        this.Button00_onclick = function(obj,e)
        {
        	
        }

        this.treeModal_onload = function(obj,e)
        {
        	trace("Test");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.treeModal_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("treeModal.xfdl", true);

       
    };
}
)();
