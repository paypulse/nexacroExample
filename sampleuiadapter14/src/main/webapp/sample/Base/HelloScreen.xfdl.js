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
                this.set_name("base_hello");
                this.set_titletext("Base::base_hello");
                this._setFormPosition(0,0,745,645);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"255\" type=\"STRING\"/><Column id=\"VALUE\" size=\"255\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">Human Resources</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"255\" type=\"STRING\"/><Column id=\"VALUE\" size=\"255\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">Human Resources</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gender", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"255\" type=\"STRING\"/><Column id=\"VALUE\" size=\"255\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">Human Resources</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_employees", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"INT\" size=\"256\"/><Column id=\"RANK\" type=\"INT\" size=\"256\"/><Column id=\"GENDER\" type=\"INT\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/><Column id=\"EMPL_MEMO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">SHIN SOO CHOO </Col><Col id=\"DEPT_ID\">01</Col><Col id=\"HIRE_DATE\">20011104</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">1</Col><Col id=\"SALARY\">2000</Col><Col id=\"EMPL_MEMO\">baseball</Col></Row><Row><Col id=\"EMPL_ID\">BB001</Col><Col id=\"FULL_NAME\">YUNA KIM</Col><Col id=\"DEPT_ID\">02</Col><Col id=\"HIRE_DATE\">20050305</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3000</Col><Col id=\"EMPL_MEMO\">figure skating</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">SUMI JO </Col><Col id=\"DEPT_ID\">03</Col><Col id=\"HIRE_DATE\">20100506</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">5000</Col><Col id=\"EMPL_MEMO\">singer</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">JS PARK</Col><Col id=\"DEPT_ID\">04</Col><Col id=\"HIRE_DATE\">20101123</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">0</Col><Col id=\"SALARY\">3500</Col><Col id=\"EMPL_MEMO\">soccer</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edit_hello", "absolute", "16", "16", "167", "28", null, null, this);
            obj.set_taborder("0");
            obj.set_value("Hello");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hello", "absolute", "216", "16", "111", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("hello!!!");
            this.addChild(obj.name, obj);

            obj = new Static("st_title", "absolute", "16", "56", "179", "34", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Employee Management");
            obj.style.set_background("mintcream");
            obj.style.set_border("1 solid #646464ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 Tahoma");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch", "absolute", "224", "69", "208", "21", null, null, this);
            obj.set_taborder("3");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Button("btnRetrieve", "absolute", "448", "66", "53", "22", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Retrieve");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "16", "112", "718", "146", null, null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_emp");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"93\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\"><Cell/><Cell col=\"1\" text=\"EMPL_ID\"/></Cell><Cell col=\"2\" text=\"FULL_NAME\"/><Cell col=\"3\" text=\"DEPT_ID\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"GENDER\"/><Cell col=\"6\" text=\"MARRIED\"/><Cell col=\"7\" text=\"SALARY\"/><Cell col=\"8\" text=\"EMPL_MEMO\"/></Band><Band id=\"body\"><Cell colspan=\"2\"><Cell/><Cell col=\"1\" text=\"bind:EMPL_ID\"/></Cell><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_ID\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:GENDER\"/><Cell col=\"6\" text=\"bind:MARRIED\"/><Cell col=\"7\" text=\"bind:SALARY\"/><Cell col=\"8\" text=\"bind:EMPL_MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "21", "334", "707", "146", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/><Column size=\"166\"/><Column size=\"122\"/><Column size=\"123\"/><Column size=\"135\"/><Column size=\"136\"/><Column size=\"131\"/><Column size=\"155\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" style=\"font:8 Arial;\" text=\"EMPLOYEES\"/><Cell col=\"2\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"DEPT\"/><Cell col=\"3\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"HIRE_DATE\"/><Cell col=\"4\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"GENDER\"/><Cell col=\"5\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"MARRIED\"/><Cell col=\"6\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"SALARY\"/><Cell col=\"7\" rowspan=\"2\" style=\"font:8 Arial;\" text=\"MEMO\"/><Cell row=\"1\" style=\"font:8 Arial;\" text=\"ID\" expandsize=\"13\"/><Cell row=\"1\" col=\"1\" style=\"font:8 Arial;\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_ID\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:GENDER\"/><Cell col=\"5\" text=\"bind:MARRIED\"/><Cell col=\"6\" text=\"bind:SALARY\"/><Cell col=\"7\" text=\"bind:EMPL_MEMO\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"3\"/><Cell row=\"3\" col=\"1\"/><Cell row=\"3\" col=\"2\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"3\" col=\"4\"/><Cell row=\"3\" col=\"5\"/><Cell row=\"3\" col=\"6\"/><Cell row=\"3\" col=\"7\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "21", "296", "210", "36", null, null, this);
            obj.set_taborder("7");
            obj.set_text("DataSetEditor Example");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 745, 645, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::base_hello");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtSearch","value","ds_rank","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("HelloScreen.xfdl", function(exports) {

        this.btn_hello_onclick = function(obj,e)
        {
        	this.alert("Hello");
        	alert(this.edit_hello.value);
        	//이벤트 함수의 첫번째 인자는 이벤트를 실행한 오브젝트 
        	application.alert(obj.text);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_hello.addEventHandler("onclick", this.btn_hello_onclick, this);

        };

        this.loadIncludeScript("HelloScreen.xfdl", true);

       
    };
}
)();
