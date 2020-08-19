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
                this.set_name("etcExample1");
                this.set_titletext("Base::etcExample1");
                this._setFormPosition(0,0,764,640);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj._setContents("<ColumnInfo><Column id=\"index\" type=\"INT\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"index\">0</Col><Col id=\"value\">M</Col><Col id=\"text\">Men</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("bigCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">100</Col><Col id=\"value\">농산품</Col></Row><Row><Col id=\"code\">200</Col><Col id=\"value\">수산물</Col></Row><Row><Col id=\"code\">300</Col><Col id=\"value\">축산물</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("middleCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">101</Col><Col id=\"value\">콩</Col></Row><Row><Col id=\"code\">102</Col><Col id=\"value\">상추</Col></Row><Row><Col id=\"code\">103</Col><Col id=\"value\">배추</Col></Row><Row><Col id=\"code\">201</Col><Col id=\"value\">고등어</Col></Row><Row><Col id=\"code\">202</Col><Col id=\"value\">참치</Col></Row><Row><Col id=\"code\">203</Col><Col id=\"value\">연어</Col></Row><Row><Col id=\"code\">301</Col><Col id=\"value\">소고기</Col></Row><Row><Col id=\"code\">302</Col><Col id=\"value\">돼지고기</Col></Row><Row><Col id=\"code\">303</Col><Col id=\"value\">닭고기</Col></Row><Row><Col id=\"code\">304</Col><Col id=\"value\">오리고기</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("smallCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1000</Col><Col id=\"value\">콩_국산</Col></Row><Row><Col id=\"code\">1001</Col><Col id=\"value\">쌀_수입</Col></Row><Row><Col id=\"code\">1002</Col><Col id=\"value\">보리_국산</Col></Row><Row><Col id=\"code\">2000</Col><Col id=\"value\">고등어_냉동</Col></Row><Row><Col id=\"code\">2001</Col><Col id=\"value\">참치_해동</Col></Row><Row><Col id=\"code\">2002</Col><Col id=\"value\">연어_국산</Col></Row><Row><Col id=\"code\">3000</Col><Col id=\"value\">소고기_국산</Col></Row><Row><Col id=\"code\">3001</Col><Col id=\"value\">돼지고기_수입</Col></Row><Row><Col id=\"code\">3002</Col><Col id=\"value\">닭고기_해동</Col></Row><Row><Col id=\"code\">3003</Col><Col id=\"value\">오리고기_국산</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("default", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">100</Col><Col id=\"value\">test1</Col></Row><Row><Col id=\"code\">200</Col><Col id=\"value\">test2</Col></Row><Row><Col id=\"code\">300</Col><Col id=\"value\">search1</Col></Row><Row><Col id=\"code\">400</Col><Col id=\"value\">search2</Col></Row><Row><Col id=\"code\">500</Col><Col id=\"value\">output1</Col></Row><Row><Col id=\"code\">600</Col><Col id=\"value\">output2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("datasetTest", this);
            obj._setContents("<ColumnInfo><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"status\">1</Col><Col id=\"col1\">1</Col><Col id=\"col2\">2</Col><Col id=\"col3\">3</Col></Row><Row><Col id=\"status\">1</Col><Col id=\"col1\">4</Col><Col id=\"col2\">5</Col><Col id=\"col3\">6</Col></Row><Row><Col id=\"status\">1</Col><Col id=\"col1\">7</Col><Col id=\"col2\">8</Col><Col id=\"col3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("datasetTest2", this);
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"col1\">A</Col><Col id=\"col2\">1</Col></Row><Row><Col id=\"col1\">A</Col><Col id=\"col2\">2</Col></Row><Row><Col id=\"col1\">A</Col><Col id=\"col2\">3</Col></Row><Row><Col id=\"col1\">B</Col><Col id=\"col2\">4</Col></Row><Row><Col id=\"col1\">B</Col><Col id=\"col2\">5</Col></Row><Row><Col id=\"col1\">C</Col><Col id=\"col2\">6</Col></Row><Row><Col id=\"col1\">C</Col><Col id=\"col2\">7</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "80.63%", "17", null, "30", "2.49%", null, this);
            obj.set_taborder("0");
            obj.set_text("←Back");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.57%", "15", null, "23", "82.85%", null, this);
            obj.set_taborder("1");
            obj.set_text("Combo Example");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "1.44%", "52", null, "25", "84.55%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_in");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_displaynulltext("::select::");

            obj = new Combo("BigValue", "absolute", "1.44%", "95", null, "25", "84.55%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_text("Combo01");
            obj.set_displaynulltext("::대분류::");
            obj.set_innerdataset("@bigCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Combo("middleValue", "absolute", "17.15%", "95", null, "25", "68.85%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_text("Combo02");
            obj.set_displaynulltext("::중분류::");
            obj.set_innerdataset("@middleCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Combo("smallValue", "absolute", "33.12%", "95", null, "25", "52.88%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_text("Combo01");
            obj.set_displaynulltext("::소분류::");
            obj.set_innerdataset("@smallCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Combo("Combo01", "absolute", "1.05%", "133", null, "22", "81.54%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_type("search");
            obj.set_innerdataset("@searchCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");

            obj = new Static("Static01", "absolute", "1.18%", "165", null, "27", "73.43%", null, this);
            obj.set_taborder("7");
            obj.set_text("Dataset");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "1.57%", "192", null, "107", "52.36%", null, this);
            obj.set_taborder("8");
            obj.set_binddataset("datasetTest");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"status\"/><Cell col=\"1\" disptype=\"normal\" text=\"col1\"/><Cell col=\"2\" disptype=\"normal\" text=\"col2\"/><Cell col=\"3\" disptype=\"normal\" text=\"col3\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:status\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:col1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:col2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:col3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "1.83%", "304", null, "23", "82.46%", null, this);
            obj.set_taborder("9");
            obj.set_text("Ascending");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "18.85%", "304", null, "23", "65.45%", null, this);
            obj.set_taborder("10");
            obj.set_text("Descending");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "35.21%", "304", null, "23", "49.21%", null, this);
            obj.set_taborder("11");
            obj.set_text("Filter");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "1.83%", "337", null, "23", "82.2%", null, this);
            obj.set_taborder("12");
            obj.set_text("filter 해제 ");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "18.85%", "337", null, "23", "65.45%", null, this);
            obj.set_taborder("13");
            obj.set_text("getColumn(0,col1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "1.83%", "469", null, "23", "75.92%", null, this);
            obj.set_taborder("14");
            obj.set_text("filter를 이용한 distinct 처리");
            obj.style.set_font("9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "1.96%", "378", null, "88", "75.79%", null, this);
            obj.set_taborder("15");
            obj.set_binddataset("datasetTest2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"col1\"/><Cell col=\"1\" disptype=\"normal\" text=\"col2\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:col1\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:col2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 764, 640, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("Base::etcExample1");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("etcExample1.xfdl", function(exports) {

        this.Button00_onclick = function(obj,e)
        {
        	this.go("Base::HelloScreen.xfdl");
        }

        

        
        this.BigValue_onitemchanged = function(obj,e)
        {
        	this.middleValue.set_innerdataset("middleCombo");
        	if(this.middleValue.value != null){
        		
        		this.middleValue.set_text("::중분류::");
        	}
        	
        	if(this.BigValue.value == '100')
        	{
        		this.middleCombo.filter("code <200");
        		this.smallCombo.filter("code >= 1000 && code <2000");
        	}else if(this.BigValue.value =='200')
        	{	
        		this.middleCombo.filter("code>=200 && code <300");
        		this.smallCombo.filter("code >= 2000 && code <3000");
        	
        	}else{
        		this.middleCombo.filter("code>=300 && code <400");
        		this.smallCombo.filter("code >= 3000 && code <4000");
        	}
        }

        this.middleValue_onitemchanged = function(obj,e)
        {
        	this.smallValue.set_innerdataset("smallCombo");
        	if(this.smallValue.value != null){
        		this.smallValue.set_text("::소분류::");
        	}
        	
        	if(this.middleValue.value >= '100' && this.middleValue.value < '200')
        	{
        		this.smallCombo.filter("code >= 1000 && code <2000");
        	}else if(this.middleValue.value >= '200' && this.middleValue.value <'300')
        	{
        		this.smallCombo.filter("code >= 2000 && code <3000");
        	}else{
        		this.smallCombo.filter("code >= 3000 && code <4000");
        	}
        	
        	
        	
        	
        }

        this.etcExample1_onload = function(obj,e)
        {
        	if(new String(this.BigValue.value).valueOf() == "undefined"){
        		this.middleValue.set_innerdataset("default");
        		this.smallValue.set_innerdataset("default");	
        	}
        }

        this.Combo01_onitemchanged = function(obj,e)
        {
        	trace(this.Combo01.value);
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.datasetTest.set_keystring("S:-col1-col2");
        	
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.datasetTest.set_keystring("S:+col1+col2");
        }

        this.Button03_onclick = function(obj,e)
        {
        	//filter 예제
        	this.datasetTest.filter("col1 >'1'");
        }

        this.Button04_onclick = function(obj,e)
        {
        	this.datasetTest.filter("");
        }

        this.Button05_onclick = function(obj,e)
        {
        	trace(this.datasetTest.getColumn(0,"col1"));
        }

        this.Button06_onclick = function(obj,e)
        {
        	this.datasetTest2.filter();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.etcExample1_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.BigValue.addEventHandler("onitemchanged", this.BigValue_onitemchanged, this);
            this.middleValue.addEventHandler("onitemchanged", this.middleValue_onitemchanged, this);
            this.Combo01.addEventHandler("onitemchanged", this.Combo01_onitemchanged, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button06_onclick, this);

        };

        this.loadIncludeScript("etcExample1.xfdl", true);

       
    };
}
)();
