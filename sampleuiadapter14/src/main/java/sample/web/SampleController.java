package sample.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.spring.annotation.ParamDataSet;
import com.nexacro.spring.data.NexacroResult;

import sample.service.SampleService;

@Controller
public class SampleController {
  private Logger logger = LoggerFactory.getLogger(SampleController.class);
  
    @Resource(name = "sampleService")
    private SampleService sampleService;
    
    @RequestMapping(path = "/selectSampleList.do")
    //public NexacroResult selectSampleList(@ParamDataSet(name = "input1", required = false) Map<String,String> ds_search) 
    public NexacroResult selectSampleList() 
    {
      
    	//logger.debug("ds_search >>> " + ds_search);
        List<Map<String, Object>> sampleList = null;
       // sampleList = sampleService.selectSampleList(ds_search);
        sampleList = sampleService.selectSampleList();
        NexacroResult result = new NexacroResult();
        result.addDataSet("output1", sampleList);

        return result;
    }
}