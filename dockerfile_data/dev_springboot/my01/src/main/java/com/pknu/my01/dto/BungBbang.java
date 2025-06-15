package com.pknu.my01.dto;

import java.time.LocalDate;

public class BungBbang {
    private String flavor; // 맛
    private int price; // 가격
    private LocalDate madeDate; // 제조일자

    public BungBbang(String flavor, int price, LocalDate madeDate) {
        this.flavor = flavor;
        this.price = price;
        this.madeDate = madeDate;
    }

    public String getFlavor() {
        return flavor;
    }
    
    public int getPrice() {
        return price;
    }
    
    public LocalDate getMadeDate() {
        return madeDate;
    }

}
