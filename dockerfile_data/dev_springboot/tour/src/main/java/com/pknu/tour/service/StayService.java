package com.pknu.tour.service;

import com.pknu.tour.dto.StayDTO;
import org.springframework.stereotype.Service;
import org.w3c.dom.*;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.net.URLEncoder;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@Service
public class StayService {
    public List<StayDTO> getStayList() {
        List<StayDTO> stayList = new ArrayList<>();

        try {
            String serviceKey = URLEncoder.encode("디코딩키", "UTF-8");
            String urlStr = "https://apis.data.go.kr/B551011/TarRlteTarService1/areaBasedList1"
                    + "?serviceKey=" + serviceKey
                    + "&MobileOS=ETC"
                    + "&MobileApp=AppTest"
                    + "&baseYm=202503"
                    + "&areaCd=11"
                    + "&signguCd=11530"
                    + "&pageNo=1"
                    + "&numOfRows=10"
                    + "&_type=xml";

            URL url = new URL(urlStr);
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document doc = builder.parse(url.openStream());

            NodeList items = doc.getElementsByTagName("item");
            for (int i = 0; i < items.getLength(); i++) {
                Element element = (Element) items.item(i);
                String title = getTagValue("rlteTatsNm", element);
                String addr1 = getTagValue("rlteSignguNm", element);

                stayList.add(new StayDTO(title, addr1));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return stayList;
    }

    private String getTagValue(String tag, Element element) {
        NodeList nlList = element.getElementsByTagName(tag).item(0).getChildNodes();
        Node nValue = (nlList != null && nlList.getLength() > 0) ? nlList.item(0) : null;
        return (nValue == null) ? "" : nValue.getNodeValue();
    }
}
