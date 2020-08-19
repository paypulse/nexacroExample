package sample.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

public interface SampleService {
	List<Map<String,Object>> selectSampleList();
}
