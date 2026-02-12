"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";

// Original array
const ownerReviews = [
  {
    id: 1,
    title: "A daily driven GTR owner review - Pakwheels",
    thumbnail: "/video1.jpg",
    link: "/video/gtr",
    youtubeId: "gtr_video_id"
  },
  {
    id: 2,
    title: "Ferrari 296 GTB Drive Review | Hybrid Ferrari worth it hai?",
    thumbnail: "/video2.jpg",
    link: "/video/ferrari-2",
    youtubeId: "ferrari_video_id"
  },
  {
    id: 3,
    title: "Audi A5 owner Review: Design, Comfort, and Performance!",
    thumbnail: "/video3.jpg",
    link: "/video/audi",
    youtubeId: "audi_video_id"
  },
  {
    id: 4,
    title: "Mercedes G-Wagon Owner Review",
    thumbnail: "/video4.jpg",
    link: "/video/gwagon",
    youtubeId: "gwagon_video_id"
  },
  {
    id: 5,
    title: "Honda Civic 2005 Owner Review",
    thumbnail: "/video5.jpg",
    link: "/video/civic",
    youtubeId: "civic_video_id"
  },
  {
    id: 6,
    title: "Mercedes E-Class Classic Owner Review",
    thumbnail: "/video6.jpg",
    link: "/video/eclass",
    youtubeId: "eclass_video_id"
  },
  {
    id: 7,
    title: "Toyota Corolla 2015 Owner Review",
    thumbnail: "/video7.jpg",
    link: "/video/corolla",
    youtubeId: "corolla_video_id"
  },
  {
    id: 8,
    title: "Honda City Owner Review",
    thumbnail: "/video8.jpg",
    link: "/video/city",
    youtubeId: "city_video_id"
  },
  {
    id: 9,
    title: "Toyota Land Cruiser Owner Review",
    thumbnail: "/video9.jpg",
    link: "/video/landcruiser",
    youtubeId: "landcruiser_video_id"
  },
  {
    id: 10,
    title: "Suzuki Swift Owner Review",
    thumbnail: "/video10.jpg",
    link: "/video/swift",
    youtubeId: "swift_video_id"
  },
  {
    id: 11,
    title: "Kia Sportage Owner Review",
    thumbnail: "/video11.jpg",
    link: "/video/sportage",
    youtubeId: "sportage_video_id"
  },
  {
    id: 12,
    title: "Hyundai Tucson Owner Review",
    thumbnail: "/video12.jpg",
    link: "/video/tucson",
    youtubeId: "tucson_video_id"
  },
];

// 10 additional sections data with all videos
const additionalSections = [
  {
    title: "Luxury Car Reviews",
    videos: [
      { id: 13, title: "Porsche 911 Review", thumbnail: "/video13.jpg", link: "/video/porsche", youtubeId: "porsche_video_id" },
      { id: 14, title: "BMW M5 Review", thumbnail: "/video14.jpg", link: "/video/bmw-m5", youtubeId: "bmw_m5_video_id" },
      { id: 15, title: "Audi R8 Review", thumbnail: "/video15.jpg", link: "/video/audi-r8", youtubeId: "audi_r8_video_id" },
      { id: 16, title: "Mercedes S-Class Review", thumbnail: "/video16.jpg", link: "/video/sclass", youtubeId: "sclass_video_id" },
      { id: 17, title: "Range Rover Review", thumbnail: "/video17.jpg", link: "/video/rangerover", youtubeId: "rangerover_video_id" },
      { id: 18, title: "Lexus LX Review", thumbnail: "/video18.jpg", link: "/video/lexus", youtubeId: "lexus_video_id" },
      { id: 19, title: "Bentley Continental Review", thumbnail: "/video19.jpg", link: "/video/bentley", youtubeId: "bentley_video_id" },
      { id: 20, title: "Rolls Royce Review", thumbnail: "/video20.jpg", link: "/video/rollsroyce", youtubeId: "rollsroyce_video_id" },
      { id: 21, title: "Maserati Review", thumbnail: "/video21.jpg", link: "/video/maserati", youtubeId: "maserati_video_id" },
      { id: 22, title: "Jaguar F-Type Review", thumbnail: "/video22.jpg", link: "/video/jaguar", youtubeId: "jaguar_video_id" },
      { id: 23, title: "McLaren 720S Review", thumbnail: "/video23.jpg", link: "/video/mclaren", youtubeId: "mclaren_video_id" },
      { id: 24, title: "Lamborghini Review", thumbnail: "/video24.jpg", link: "/video/lambo", youtubeId: "lambo_video_id" },
    ]
  },
  {
    title: "Budget Cars",
    videos: [
      { id: 25, title: "Suzuki Alto Review", thumbnail: "/video25.jpg", link: "/video/alto", youtubeId: "alto_video_id" },
      { id: 26, title: "Toyota Yaris Review", thumbnail: "/video26.jpg", link: "/video/yaris", youtubeId: "yaris_video_id" },
      { id: 27, title: "Honda BR-V Review", thumbnail: "/video27.jpg", link: "/video/brv", youtubeId: "brv_video_id" },
      { id: 28, title: "Suzuki Cultus Review", thumbnail: "/video28.jpg", link: "/video/cultus", youtubeId: "cultus_video_id" },
      { id: 29, title: "Toyota Vitz Review", thumbnail: "/video29.jpg", link: "/video/vitz", youtubeId: "vitz_video_id" },
      { id: 30, title: "Kia Picanto Review", thumbnail: "/video30.jpg", link: "/video/picanto", youtubeId: "picanto_video_id" },
      { id: 31, title: "Hyundai i10 Review", thumbnail: "/video31.jpg", link: "/video/i10", youtubeId: "i10_video_id" },
      { id: 32, title: "Suzuki Wagon R Review", thumbnail: "/video32.jpg", link: "/video/wagonr", youtubeId: "wagonr_video_id" },
      { id: 33, title: "Daihatsu Mira Review", thumbnail: "/video33.jpg", link: "/video/mira", youtubeId: "mira_video_id" },
      { id: 34, title: "Toyota Passo Review", thumbnail: "/video34.jpg", link: "/video/passo", youtubeId: "passo_video_id" },
      { id: 35, title: "Mitsubishi Mirage Review", thumbnail: "/video35.jpg", link: "/video/mirage", youtubeId: "mirage_video_id" },
      { id: 36, title: "Nissan Dayz Review", thumbnail: "/video36.jpg", link: "/video/dayz", youtubeId: "dayz_video_id" },
    ]
  },
  {
    title: "Electric Cars",
    videos: [
      { id: 37, title: "Tesla Model 3 Review", thumbnail: "/video37.jpg", link: "/video/tesla", youtubeId: "tesla_video_id" },
      { id: 38, title: "BYD Han EV Review", thumbnail: "/video40.jpg", link: "/video/byd", youtubeId: "byd_video_id" },
      { id: 39, title: "MG ZS EV Review", thumbnail: "/video39.jpg", link: "/video/mg-zs", youtubeId: "mg_zs_video_id" },
      { id: 40, title: "Toyota Prius Review", thumbnail: "/video44.jpg", link: "/video/prius", youtubeId: "prius_video_id" },
      { id: 41, title: "Honda City Hybrid Review", thumbnail: "/video41.jpg", link: "/video/city-hybrid", youtubeId: "city_hybrid_video_id" },
      { id: 42, title: "Audi e-tron Review", thumbnail: "/video42.jpg", link: "/video/audi-etron", youtubeId: "audi_etron_video_id" },
      { id: 43, title: "BMW i4 Review", thumbnail: "/video43.jpg", link: "/video/bmw-i4", youtubeId: "bmw_i4_video_id" },
      { id: 44, title: "Mercedes EQS Review", thumbnail: "/video1.jpg", link: "/video/mercedes-eqs", youtubeId: "mercedes_eqs_video_id" },
      { id: 45, title: "Kia EV6 Review", thumbnail: "/video2.jpg", link: "/video/kia-ev6", youtubeId: "kia_ev6_video_id" },
      { id: 46, title: "Hyundai Ioniq 5 Review", thumbnail: "/video3.jpg", link: "/video/ioniq", youtubeId: "ioniq_video_id" },
      { id: 47, title: "Nissan Leaf Review", thumbnail: "/video4.jpg", link: "/video/leaf", youtubeId: "leaf_video_id" },
      { id: 48, title: "Toyota Corolla Hybrid Review", thumbnail: "/video5.jpg", link: "/video/corolla-hybrid", youtubeId: "corolla_hybrid_video_id" },
    ]
  },
  {
    title: "SUV Reviews",
    videos: [
      { id: 49, title: "Toyota Fortuner Review", thumbnail: "/video6.jpg", link: "/video/fortuner", youtubeId: "fortuner_video_id" },
      { id: 50, title: "Honda CR-V Review", thumbnail: "/video7.jpg", link: "/video/crv", youtubeId: "crv_video_id" },
      { id: 51, title: "MG HS Review", thumbnail: "/video8.jpg", link: "/video/mg-hs", youtubeId: "mg_hs_video_id" },
      { id: 52, title: "BMW X5 Review", thumbnail: "/video9.jpg", link: "/video/bmw-x5", youtubeId: "bmw_x5_video_id" },
      { id: 53, title: "Audi Q7 Review", thumbnail: "/video10.jpg", link: "/video/audi-q7", youtubeId: "audi_q7_video_id" },
      { id: 54, title: "Volvo XC90 Review", thumbnail: "/video11.jpg", link: "/video/volvo", youtubeId: "volvo_video_id" },
      { id: 55, title: "Toyota RAV4 Review", thumbnail: "/video12.jpg", link: "/video/rav4", youtubeId: "rav4_video_id" },
      { id: 56, title: "Mazda CX-5 Review", thumbnail: "/video13.jpg", link: "/video/cx5", youtubeId: "cx5_video_id" },
      { id: 57, title: "Subaru Forester Review", thumbnail: "/video14.jpg", link: "/video/forester", youtubeId: "forester_video_id" },
      { id: 58, title: "Jeep Grand Cherokee Review", thumbnail: "/video15.jpg", link: "/video/jeep", youtubeId: "jeep_video_id" },
      { id: 59, title: "Ford Explorer Review", thumbnail: "/video16.jpg", link: "/video/explorer", youtubeId: "explorer_video_id" },
      { id: 60, title: "Chevrolet Tahoe Review", thumbnail: "/video17.jpg", link: "/video/tahoe", youtubeId: "tahoe_video_id" },
    ]
  },
  {
    title: "Sports Cars",
    videos: [
      { id: 61, title: "Toyota Supra Review", thumbnail: "/video18.jpg", link: "/video/supra", youtubeId: "supra_video_id" },
      { id: 62, title: "Ford Mustang Review", thumbnail: "/video19.jpg", link: "/video/mustang", youtubeId: "mustang_video_id" },
      { id: 63, title: "Chevrolet Corvette Review", thumbnail: "/video20.jpg", link: "/video/corvette", youtubeId: "corvette_video_id" },
      { id: 64, title: "BMW M4 Review", thumbnail: "/video21.jpg", link: "/video/bmw-m4", youtubeId: "bmw_m4_video_id" },
      { id: 65, title: "Mercedes AMG GT Review", thumbnail: "/video22.jpg", link: "/video/amg-gt", youtubeId: "amg_gt_video_id" },
      { id: 66, title: "Audi TT Review", thumbnail: "/video23.jpg", link: "/video/audi-tt", youtubeId: "audi_tt_video_id" },
      { id: 67, title: "Porsche Cayman Review", thumbnail: "/video24.jpg", link: "/video/cayman", youtubeId: "cayman_video_id" },
      { id: 68, title: "Nissan 370Z Review", thumbnail: "/video25.jpg", link: "/video/370z", youtubeId: "370z_video_id" },
      { id: 69, title: "Mazda MX-5 Review", thumbnail: "/video26.jpg", link: "/video/mx5", youtubeId: "mx5_video_id" },
      { id: 70, title: "Subaru BRZ Review", thumbnail: "/video27.jpg", link: "/video/brz", youtubeId: "brz_video_id" },
      { id: 71, title: "Toyota 86 Review", thumbnail: "/video28.jpg", link: "/video/toyota86", youtubeId: "toyota86_video_id" },
      { id: 72, title: "Hyundai Veloster Review", thumbnail: "/video29.jpg", link: "/video/veloster", youtubeId: "veloster_video_id" },
    ]
  },
  {
    title: "Family Cars",
    videos: [
      { id: 73, title: "Toyota Camry Review", thumbnail: "/video30.jpg", link: "/video/camry", youtubeId: "camry_video_id" },
      { id: 74, title: "Honda Accord Review", thumbnail: "/video31.jpg", link: "/video/accord", youtubeId: "accord_video_id" },
      { id: 75, title: "Hyundai Sonata Review", thumbnail: "/video32.jpg", link: "/video/sonata", youtubeId: "sonata_video_id" },
      { id: 76, title: "Kia K5 Review", thumbnail: "/video33.jpg", link: "/video/kia-k5", youtubeId: "kia_k5_video_id" },
      { id: 77, title: "MG 5 Review", thumbnail: "/video34.jpg", link: "/video/mg5", youtubeId: "mg5_video_id" },
      { id: 78, title: "Changan Alsvin Review", thumbnail: "/video35.jpg", link: "/video/changan", youtubeId: "changan_video_id" },
      { id: 79, title: "Suzuki Ciaz Review", thumbnail: "/video36.jpg", link: "/video/ciaz", youtubeId: "ciaz_video_id" },
      { id: 80, title: "Toyota Avalon Review", thumbnail: "/video37.jpg", link: "/video/avalon", youtubeId: "avalon_video_id" },
      { id: 81, title: "Nissan Altima Review", thumbnail: "/video38.jpg", link: "/video/altima", youtubeId: "altima_video_id" },
      { id: 82, title: "Mazda 6 Review", thumbnail: "/video41.jpg", link: "/video/mazda6", youtubeId: "mazda6_video_id" },
      { id: 83, title: "Subaru Legacy Review", thumbnail: "/video40.jpg", link: "/video/legacy", youtubeId: "legacy_video_id" },
      { id: 84, title: "Volkswagen Passat Review", thumbnail: "/video42.jpg", link: "/video/passat", youtubeId: "passat_video_id" },
    ]
  },
  {
    title: "Off-road Vehicles",
    videos: [
      { id: 85, title: "Toyota Hilux Review", thumbnail: "/video43.jpg", link: "/video/hilux", youtubeId: "hilux_video_id" },
      { id: 86, title: "Jeep Wrangler Review", thumbnail: "/video44.jpg", link: "/video/wrangler", youtubeId: "wrangler_video_id" },
      { id: 87, title: "Land Rover Defender Review", thumbnail: "/video6.jpg", link: "/video/defender", youtubeId: "defender_video_id" },
      { id: 88, title: "Ford Ranger Review", thumbnail: "/video7.jpg", link: "/video/ranger", youtubeId: "ranger_video_id" },
      { id: 89, title: "Mitsubishi Pajero Review", thumbnail: "/video8.jpg", link: "/video/pajero", youtubeId: "pajero_video_id" },
      { id: 90, title: "Toyota Prado Review", thumbnail: "/video9.jpg", link: "/video/prado", youtubeId: "prado_video_id" },
      { id: 91, title: "Nissan Patrol Review", thumbnail: "/video10.jpg", link: "/video/patrol", youtubeId: "patrol_video_id" },
      { id: 92, title: "Suzuki Jimny Review", thumbnail: "/video11.jpg", link: "/video/jimny", youtubeId: "jimny_video_id" },
      { id: 93, title: "Isuzu D-Max Review", thumbnail: "/video12.jpg", link: "/video/dmax", youtubeId: "dmax_video_id" },
      { id: 94, title: "Mercedes G-Class Professional Review", thumbnail: "/video13.jpg", link: "/video/g-professional", youtubeId: "g_professional_video_id" },
      { id: 95, title: "Ford Bronco Review", thumbnail: "/video14.jpg", link: "/video/bronco", youtubeId: "bronco_video_id" },
      { id: 96, title: "Toyota Tacoma Review", thumbnail: "/video15.jpg", link: "/video/tacoma", youtubeId: "tacoma_video_id" },
    ]
  },
  {
    title: "Vintage Classics",
    videos: [
      { id: 97, title: "Toyota Corolla 1995 Review", thumbnail: "/video16.jpg", link: "/video/corolla-95", youtubeId: "corolla95_video_id" },
      { id: 98, title: "Honda Civic 1998 Review", thumbnail: "/video17.jpg", link: "/video/civic-98", youtubeId: "civic98_video_id" },
      { id: 99, title: "Suzuki FX Review", thumbnail: "/video18.jpg", link: "/video/fx", youtubeId: "fx_video_id" },
      { id: 100, title: "Toyota Corona Review", thumbnail: "/video19.jpg", link: "/video/corona", youtubeId: "corona_video_id" },
      { id: 101, title: "Mitsubishi Lancer 1995 Review", thumbnail: "/video20.jpg", link: "/video/lancer-95", youtubeId: "lancer95_video_id" },
      { id: 102, title: "Suzuki Khyber Review", thumbnail: "/video21.jpg", link: "/video/khyber", youtubeId: "khyber_video_id" },
      { id: 103, title: "Toyota Hiace Review", thumbnail: "/video22.jpg", link: "/video/hiace", youtubeId: "hiace_video_id" },
      { id: 104, title: "Daihatsu Cuore Review", thumbnail: "/video23.jpg", link: "/video/cuore", youtubeId: "cuore_video_id" },
      { id: 105, title: "Nissan Sunny 1990 Review", thumbnail: "/video24.jpg", link: "/video/sunny-90", youtubeId: "sunny90_video_id" },
      { id: 106, title: "Honda Accord 1994 Review", thumbnail: "/video25.jpg", link: "/video/accord-94", youtubeId: "accord94_video_id" },
      { id: 107, title: "Toyota Corolla 2000 Review", thumbnail: "/video26.jpg", link: "/video/corolla-00", youtubeId: "corolla00_video_id" },
      { id: 108, title: "Suzuki Mehran Review", thumbnail: "/video27.jpg", link: "/video/mehran", youtubeId: "mehran_video_id" },
    ]
  },
  {
    title: "Commercial Vehicles",
    videos: [
      { id: 109, title: "Toyota Hiace Van Review", thumbnail: "/video28.jpg", link: "/video/hiace-van", youtubeId: "hiace_van_video_id" },
      { id: 110, title: "Suzuki Bolan Review", thumbnail: "/video29.jpg", link: "/video/bolan", youtubeId: "bolan_video_id" },
      { id: 111, title: "Toyota Coaster Review", thumbnail: "/video30.jpg", link: "/video/coaster", youtubeId: "coaster_video_id" },
      { id: 112, title: "Isuzu Truck Review", thumbnail: "/video31.jpg", link: "/video/isuzu-truck", youtubeId: "isuzu_truck_video_id" },
      { id: 113, title: "Hino Truck Review", thumbnail: "/video32.jpg", link: "/video/hino", youtubeId: "hino_video_id" },
      { id: 114, title: "Mitsubishi Fuso Review", thumbnail: "/video33.jpg", link: "/video/fuso", youtubeId: "fuso_video_id" },
      { id: 115, title: "Nissan Civilian Review", thumbnail: "/video34.jpg", link: "/video/civilian", youtubeId: "civilian_video_id" },
      { id: 116, title: "Toyota Dyna Review", thumbnail: "/video35.jpg", link: "/video/dyna", youtubeId: "dyna_video_id" },
      { id: 117, title: "Mazda Truck Review", thumbnail: "/video36.jpg", link: "/video/mazda-truck", youtubeId: "mazda_truck_video_id" },
      { id: 118, title: "Ford Transit Review", thumbnail: "/video37.jpg", link: "/video/transit", youtubeId: "transit_video_id" },
      { id: 119, title: "Mercedes Sprinter Review", thumbnail: "/video40.jpg", link: "/video/sprinter", youtubeId: "sprinter_video_id" },
      { id: 120, title: "Volkswagen Transporter Review", thumbnail: "/video39.jpg", link: "/video/transporter", youtubeId: "transporter_video_id" },
    ]
  },
  {
    title: "Modified Cars",
    videos: [
      { id: 121, title: "Modified GTR Review", thumbnail: "/video41.jpg", link: "/video/mod-gtr", youtubeId: "mod_gtr_video_id" },
      { id: 122, title: "Modified Civic Review", thumbnail: "/video42.jpg", link: "/video/mod-civic", youtubeId: "mod_civic_video_id" },
      { id: 123, title: "Modified Corolla Review", thumbnail: "/video43.jpg", link: "/video/mod-corolla", youtubeId: "mod_corolla_video_id" },
      { id: 124, title: "Modified Suzuki Review", thumbnail: "/video44.jpg", link: "/video/mod-suzuki", youtubeId: "mod_suzuki_video_id" },
      { id: 125, title: "Modified BMW Review", thumbnail: "/video1.jpg", link: "/video/mod-bmw", youtubeId: "mod_bmw_video_id" },
      { id: 126, title: "Modified Mercedes Review", thumbnail: "/video5.jpg", link: "/video/mod-mercedes", youtubeId: "mod_mercedes_video_id" },
      { id: 127, title: "Modified Toyota Review", thumbnail: "/video7.jpg", link: "/video/mod-toyota", youtubeId: "mod_toyota_video_id" },
      { id: 128, title: "Modified Honda Review", thumbnail: "/video9.jpg", link: "/video/mod-honda", youtubeId: "mod_honda_video_id" },
      { id: 129, title: "Modified Audi Review", thumbnail: "/video11.jpg", link: "/video/mod-audi", youtubeId: "mod_audi_video_id" },
      { id: 130, title: "Modified Porsche Review", thumbnail: "/video13.jpg", link: "/video/mod-porsche", youtubeId: "mod_porsche_video_id" },
      { id: 131, title: "Modified Lamborghini Review", thumbnail: "/video17.jpg", link: "/video/mod-lambo", youtubeId: "mod_lambo_video_id" },
      { id: 132, title: "Modified Ford Review", thumbnail: "/video19.jpg", link: "/video/mod-ford", youtubeId: "mod_ford_video_id" },
    ]
  },
  {
    title: "Sedan Cars",
    videos: [
      { id: 133, title: "Toyota Corolla 2023 Review", thumbnail: "/video20.jpg", link: "/video/corolla-2023", youtubeId: "corolla2023_video_id" },
      { id: 134, title: "Honda Civic 2023 Review", thumbnail: "/video21.jpg", link: "/video/civic-2023", youtubeId: "civic2023_video_id" },
      { id: 135, title: "Hyundai Elantra Review", thumbnail: "/video22.jpg", link: "/video/elantra", youtubeId: "elantra_video_id" },
      { id: 136, title: "Toyota Camry Hybrid Review", thumbnail: "/video23.jpg", link: "/video/camry-hybrid", youtubeId: "camry_hybrid_video_id" },
      { id: 137, title: "Mercedes C-Class Review", thumbnail: "/video24.jpg", link: "/video/c-class", youtubeId: "c_class_video_id" },
      { id: 138, title: "BMW 3 Series Review", thumbnail: "/video25.jpg", link: "/video/bmw-3", youtubeId: "bmw_3_video_id" },
      { id: 139, title: "Audi A4 Review", thumbnail: "/video26.jpg", link: "/video/audi-a4", youtubeId: "audi_a4_video_id" },
      { id: 140, title: "Volkswagen Jetta Review", thumbnail: "/video27.jpg", link: "/video/jetta", youtubeId: "jetta_video_id" },
      { id: 141, title: "Skoda Octavia Review", thumbnail: "/video28.jpg", link: "/video/octavia", youtubeId: "octavia_video_id" },
      { id: 142, title: "Chevrolet Malibu Review", thumbnail: "/video29.jpg", link: "/video/malibu", youtubeId: "malibu_video_id" },
      { id: 143, title: "Kia Optima Review", thumbnail: "/video30.jpg", link: "/video/optima", youtubeId: "optima_video_id" },
      { id: 144, title: "Nissan Sentra Review", thumbnail: "/video31.jpg", link: "/video/sentra", youtubeId: "sentra_video_id" },
    ]
  },
  {
    title: "Hatchback Cars",
    videos: [
      { id: 145, title: "Suzuki Swift 2023 Review", thumbnail: "/video32.jpg", link: "/video/swift-2023", youtubeId: "swift2023_video_id" },
      { id: 146, title: "Toyota Yaris Hatchback Review", thumbnail: "/video33.jpg", link: "/video/yaris-hatch", youtubeId: "yaris_hatch_video_id" },
      { id: 147, title: "Honda Fit/Jazz Review", thumbnail: "/video34.jpg", link: "/video/honda-fit", youtubeId: "honda_fit_video_id" },
      { id: 148, title: "Hyundai i20 Review", thumbnail: "/video35.jpg", link: "/video/i20", youtubeId: "i20_video_id" },
      { id: 149, title: "Ford Fiesta Review", thumbnail: "/video36.jpg", link: "/video/fiesta", youtubeId: "fiesta_video_id" },
      { id: 150, title: "Volkswagen Polo Review", thumbnail: "/video37.jpg", link: "/video/polo", youtubeId: "polo_video_id" },
      { id: 151, title: "Mazda 2 Review", thumbnail: "/video5.jpg", link: "/video/mazda2", youtubeId: "mazda2_video_id" },
      { id: 152, title: "Suzuki Baleno Review", thumbnail: "/video39.jpg", link: "/video/baleno", youtubeId: "baleno_video_id" },
      { id: 153, title: "Toyota Aqua Review", thumbnail: "/video40.jpg", link: "/video/aqua", youtubeId: "aqua_video_id" },
      { id: 154, title: "Honda Brio Review", thumbnail: "/video41.jpg", link: "/video/brio", youtubeId: "brio_video_id" },
      { id: 155, title: "Kia Rio Review", thumbnail: "/video42.jpg", link: "/video/rio", youtubeId: "rio_video_id" },
      { id: 156, title: "Chevrolet Spark Review", thumbnail: "/video43.jpg", link: "/video/spark", youtubeId: "spark_video_id" },
    ]
  },
  {
    title: "Performance Cars",
    videos: [
      { id: 157, title: "Nissan GT-R Review", thumbnail: "/video44.jpg", link: "/video/nissan-gtr", youtubeId: "nissan_gtr_video_id" },
      { id: 158, title: "Porsche 911 Turbo S Review", thumbnail: "/video1.jpg", link: "/video/911-turbo", youtubeId: "911_turbo_video_id" },
      { id: 159, title: "Audi RS7 Review", thumbnail: "/video2.jpg", link: "/video/audi-rs7", youtubeId: "audi_rs7_video_id" },
      { id: 160, title: "BMW M8 Competition Review", thumbnail: "/video3.jpg", link: "/video/bmw-m8", youtubeId: "bmw_m8_video_id" },
      { id: 161, title: "Mercedes-AMG C63 Review", thumbnail: "/video4.jpg", link: "/video/amg-c63", youtubeId: "amg_c63_video_id" },
      { id: 162, title: "Toyota GR Supra Review", thumbnail: "/video5.jpg", link: "/video/gr-supra", youtubeId: "gr_supra_video_id" },
      { id: 163, title: "Honda NSX Review", thumbnail: "/video6.jpg", link: "/video/nsx", youtubeId: "nsx_video_id" },
      { id: 164, title: "Ford Mustang Shelby GT500 Review", thumbnail: "/video7.jpg", link: "/video/shelby-gt500", youtubeId: "shelby_gt500_video_id" },
      { id: 165, title: "Chevrolet Camaro ZL1 Review", thumbnail: "/video8.jpg", link: "/video/camaro-zl1", youtubeId: "camaro_zl1_video_id" },
      { id: 166, title: "Dodge Challenger Hellcat Review", thumbnail: "/video9.jpg", link: "/video/hellcat", youtubeId: "hellcat_video_id" },
      { id: 167, title: "McLaren 720S Spider Review", thumbnail: "/video10.jpg", link: "/video/720s-spider", youtubeId: "720s_spider_video_id" },
      { id: 168, title: "Lamborghini Huracán Review", thumbnail: "/video11.jpg", link: "/video/huracan", youtubeId: "huracan_video_id" },
    ]
  },
  {
    title: "Pakistani Market Cars",
    videos: [
      { id: 169, title: "Toyota Corolla 2024 Pakistan Review", thumbnail: "/video12.jpg", link: "/video/corolla-pak", youtubeId: "corolla_pak_video_id" },
      { id: 170, title: "Honda Civic 2024 Pakistan Review", thumbnail: "/video13.jpg", link: "/video/civic-pak", youtubeId: "civic_pak_video_id" },
      { id: 171, title: "Suzuki Alto 2024 Pakistan Review", thumbnail: "/video14.jpg", link: "/video/alto-pak", youtubeId: "alto_pak_video_id" },
      { id: 172, title: "Toyota Yaris 2024 Pakistan Review", thumbnail: "/video15.jpg", link: "/video/yaris-pak", youtubeId: "yaris_pak_video_id" },
      { id: 173, title: "Changan Alsvin 2024 Pakistan Review", thumbnail: "/video16.jpg", link: "/video/changan-pak", youtubeId: "changan_pak_video_id" },
      { id: 174, title: "MG HS 2024 Pakistan Review", thumbnail: "/video17.jpg", link: "/video/mg-hs-pak", youtubeId: "mg_hs_pak_video_id" },
      { id: 175, title: "Hyundai Tucson 2024 Pakistan Review", thumbnail: "/video18.jpg", link: "/video/tucson-pak", youtubeId: "tucson_pak_video_id" },
      { id: 176, title: "Kia Sportage 2024 Pakistan Review", thumbnail: "/video19.jpg", link: "/video/sportage-pak", youtubeId: "sportage_pak_video_id" },
      { id: 177, title: "Suzuki Swift 2024 Pakistan Review", thumbnail: "/video20.jpg", link: "/video/swift-pak", youtubeId: "swift_pak_video_id" },
      { id: 178, title: "Toyota Fortuner 2024 Pakistan Review", thumbnail: "/video21.jpg", link: "/video/fortuner-pak", youtubeId: "fortuner_pak_video_id" },
      { id: 179, title: "Honda BR-V 2024 Pakistan Review", thumbnail: "/video22.jpg", link: "/video/brv-pak", youtubeId: "brv_pak_video_id" },
      { id: 180, title: "MG ZS 2024 Pakistan Review", thumbnail: "/video23.jpg", link: "/video/mg-zs-pak", youtubeId: "mg_zs_pak_video_id" },
    ]
  }
];

// Side videos
const sideVideos = [
  {
    id: 181,
    title: "First look at Ferrari 296 GTB | Hybrid Ferrari ka kiya hi maza ho sakta hai?",
    thumbnail: "/video24.jpg",
    link: "/video/ferrari-1",
    youtubeId: "ferrari1_video_id"
  },
  {
    id: 182,
    title: "A daily driven GTR owner review - PakWheels",
    thumbnail: "/video25.jpg",
    link: "/video/gtr",
    youtubeId: "gtr2_video_id"
  },
  {
    id: 183,
    title: "Mercedes SLK 320 Restoration | Suneel ke liye surprise!",
    thumbnail: "/video26.jpg",
    link: "/video/slk",
    youtubeId: "slk_video_id"
  },
  {
    id: 184,
    title: "Ferrari 296 GTB Drive Review | Hybrid Ferrari worth it hai?",
    thumbnail: "/video27.jpg",
    link: "/video/ferrari-2",
    youtubeId: "ferrari2_video_id"
  },
  {
    id: 185,
    title: "Audi A5 owner Review: Design, Performance",
    thumbnail: "/video28.jpg",
    link: "/video/audi",
    youtubeId: "audi2_video_id"
  },
  {
    id: 186,
    title: "Toyota Land Cruiser 2023 Review | Off-road Beast",
    thumbnail: "/video29.jpg",
    link: "/video/landcruiser-new",
    youtubeId: "landcruiser_new_video_id"
  },
  {
    id: 187,
    title: "Tesla Model 3 Review | Electric Revolution in Pakistan",
    thumbnail: "/video30.jpg",
    link: "/video/tesla-pakistan",
    youtubeId: "tesla_pakistan_video_id"
  },
];

// Featured video (default)
const defaultFeaturedVideo = {
  id: 0,
  title: "First look at Ferrari 296 GTB | Hybrid Ferrari ka kiya hi maza ho sakta hai?",
  thumbnail: "/video31.jpg",
  youtubeId: "dQw4w9WgXcQ",
  description: "Watch this amazing review of Ferrari 296 GTB"
};

// Helper function for sections - 3 CARDS PER ROW
const VideoSection = ({ title, videos, bgColor, onVideoClick }) => (
  <section className={`w-full py-10 px-4 md:px-8 ${bgColor}`}>
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold cursor-default">{title}</h2>
        <button className="text-blue-600 hover:underline text-sm cursor-pointer">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.slice(0, 12).map((video) => (
          <button
            key={video.id}
            onClick={() => onVideoClick(video)}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-left hover:-translate-y-1 cursor-pointer"
          >
            <div className="relative w-full h-48">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/70 group-hover:bg-red-600 rounded-full p-3 transition-all duration-300 transform group-hover:scale-110 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-2 left-2">
                <div className="text-xs bg-red-600 text-white px-2 py-1 rounded cursor-pointer">
                  Watch
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-sm font-medium line-clamp-2 group-hover:text-red-600 transition-colors cursor-pointer">
                {video.title}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>
);

// Helper component for Video Grid in search results - 3 CARDS PER ROW
const VideoGrid = ({ videos, onVideoClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {videos.map((video) => (
      <button
        key={video.id}
        onClick={() => onVideoClick(video)}
        className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-left hover:-translate-y-1 cursor-pointer"
      >
        <div className="relative w-full h-48">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/70 group-hover:bg-red-600 rounded-full p-3 transition-all duration-300 transform group-hover:scale-110 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-sm font-medium line-clamp-2 group-hover:text-red-600 transition-colors cursor-pointer">
            {video.title}
          </h3>
        </div>
      </button>
    ))}
  </div>
);

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResultsBySection, setSearchResultsBySection] = useState([]);
  const [featuredVideo, setFeaturedVideo] = useState(defaultFeaturedVideo);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Create all videos array
  const allVideos = useMemo(() => {
    const videos = [...ownerReviews, ...sideVideos];
    
    additionalSections.forEach(section => {
      videos.push(...section.videos);
    });
    
    return videos;
  }, []);

  // Search handle function
  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchQuery.trim() === "") {
      setShowSearchResults(false);
      setFilteredVideos([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    
    // Sabhi videos mein search
    const allResults = allVideos.filter(video => {
      const videoTitle = video.title.toLowerCase();
      return videoTitle.includes(query);
    });
    
    // Section-wise grouping for search results
    const sectionResults = [];
    
    // Owner Reviews mein search
    const ownerResults = ownerReviews.filter(video =>
      video.title.toLowerCase().includes(query)
    );
    if (ownerResults.length > 0) {
      sectionResults.push({
        title: "Owner's Reviews",
        videos: ownerResults
      });
    }
    
    // Additional sections mein search
    additionalSections.forEach(section => {
      const sectionVideos = section.videos.filter(video =>
        video.title.toLowerCase().includes(query)
      );
      if (sectionVideos.length > 0) {
        sectionResults.push({
          title: section.title,
          videos: sectionVideos
        });
      }
    });

    setFilteredVideos(allResults);
    setSearchResultsBySection(sectionResults);
    setShowSearchResults(true);
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById("search-results")?.scrollIntoView({ 
        behavior: "smooth",
        block: "start" 
      });
    }, 100);
  };

  // Reset search
  const handleResetSearch = () => {
    setSearchQuery("");
    setShowSearchResults(false);
    setFilteredVideos([]);
    setSearchResultsBySection([]);
  };

  // Video click handler
  const handleVideoClick = (video) => {
    setIsLoading(true);
    
    // Set the featured video
    setFeaturedVideo({
      ...video,
      description: `Now playing: ${video.title}`
    });
    
    // Hide player initially
    setShowPlayer(false);
    setIsPlaying(false);
    
    // Scroll to featured video section smoothly
    setTimeout(() => {
      const featuredSection = document.getElementById("featured-video-section");
      if (featuredSection) {
        featuredSection.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
      
      // Loading effect
      setTimeout(() => {
        setIsLoading(false);
        setShowPlayer(true);
        setIsPlaying(true);
      }, 800);
    }, 300);
  };

  // Play featured video
  const playFeaturedVideo = () => {
    if (!showPlayer) {
      setShowPlayer(true);
    }
    setIsPlaying(true);
  };

  // Close player
  const closePlayer = () => {
    setShowPlayer(false);
    setIsPlaying(false);
  };

  // Search Results Component
  const SearchResults = () => (
    <div id="search-results" className="w-full bg-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold cursor-default">
              Search Results for "{searchQuery}"
            </h2>
            <p className="text-gray-600 mt-2 cursor-default">
              Found {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={handleResetSearch}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span>Clear Search</span>
          </button>
        </div>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium mt-4 text-gray-700">No videos found</h3>
            <p className="text-gray-500 mt-2">Try searching with different keywords</p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Try: GTR, Ferrari, Toyota, Honda, Civic, Corolla, etc.</p>
            </div>
          </div>
        ) : (
          <>
            {/* All Results in One Grid */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 cursor-default">All Videos ({filteredVideos.length})</h3>
              <VideoGrid videos={filteredVideos} onVideoClick={handleVideoClick} />
            </div>

            {/* Section-wise Results */}
            {searchResultsBySection.map((section, index) => (
              <div key={index} className="mb-10">
                <h3 className="text-xl font-semibold mb-6 text-gray-800 cursor-default">{section.title} ({section.videos.length})</h3>
                <VideoGrid videos={section.videos} onVideoClick={handleVideoClick} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* HERO SECTION with Updated Search */}
      <section className="bg-[#1f3b75] py-10 h-50 px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 cursor-default">
            PakWheels Videos
          </h1>
          <p className="text-white/90 text-base sm:text-lg mb-6 md:mb-8 cursor-default">
            Find information about the latest cars reviews in the market
          </p>

          <form onSubmit={handleSearch} className="bg-white p-4 rounded-lg shadow-xl flex flex-col sm:flex-row gap-3 sm:gap-4 items-center mt-8">
            <div className="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search videos (e.g., GTR, Ferrari, Toyota, Honda, Civic, Corolla)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-text"
              />
            </div>
            <button 
              type="submit"
              className="w-full sm:w-auto px-8 bg-[#45b649] hover:bg-green-600 text-white font-semibold text-lg py-3 rounded-lg transition-colors shadow-md hover:shadow-lg cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Search Suggestions */}
          {searchQuery && !showSearchResults && searchQuery.length > 0 && (
            <div className="bg-white mt-2 rounded-lg shadow-lg max-w-2xl mx-auto animate-fadeIn cursor-default">
              <div className="p-4">
                <p className="text-gray-700 font-medium mb-2">
                  Press <span className="bg-gray-100 px-2 py-1 rounded cursor-default">Enter</span> to search for "{searchQuery}"
                </p>
                <div className="text-sm text-gray-500">
                  Search in: Owner Reviews, Luxury Cars, Electric Cars, etc.
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FEATURED VIDEO SECTION */}
      <section id="featured-video-section" className="w-full bg-white py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 cursor-default">
            {showSearchResults ? "Featured Video" : "Today's Featured Video"}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden relative border-0 shadow-xl">
                {isLoading ? (
                  <div className="relative h-[400px] md:h-[500px] bg-gray-100 animate-pulse flex items-center justify-center cursor-wait">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
                      <p className="mt-4 text-gray-600">Loading video...</p>
                    </div>
                  </div>
                ) : showPlayer && isPlaying ? (
                  <div className="relative h-[400px] md:h-[500px] bg-black rounded-lg overflow-hidden">
                    {/* YouTube-like Player UI */}
                    <div className="absolute top-0 left-0 right-0 bg-black/80 z-20 p-3 flex justify-between items-center">
                      <span className="text-white font-medium truncate cursor-default">Now Playing: {featuredVideo.title}</span>
                      <button
                        onClick={closePlayer}
                        className="text-white hover:text-gray-300 p-1 cursor-pointer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Video Player Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="relative w-full h-[300px] md:h-[380px] bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden flex items-center justify-center mx-auto">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center cursor-default">
                              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="white">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                              <p className="text-xl font-semibold mb-2">🎬 Video Playing</p>
                              <p className="text-gray-300 mb-4">{featuredVideo.title}</p>
                              <div className="bg-gray-800/50 rounded-lg p-3 max-w-md mx-auto">
                                <p className="text-sm text-gray-300">
                                  This is where your video would play. Click any video from below to change.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Controls */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                      <div className="flex items-center justify-between">
                        <button className="text-white hover:text-red-500 transition-colors cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                        <div className="flex-1 mx-4 cursor-pointer">
                          <div className="h-1 bg-gray-600 rounded-full overflow-hidden">
                            <div className="h-full bg-red-600 w-1/3"></div>
                          </div>
                        </div>
                        <button className="text-white hover:text-red-500 transition-colors cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden group rounded-lg">
                    <Image
                      src={featuredVideo.thumbnail}
                      alt={featuredVideo.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    <div className="absolute bottom-8 left-8 right-8 text-white cursor-default">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredVideo.title}</h3>
                      <p className="text-gray-200 mb-6">{featuredVideo.description}</p>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={playFeaturedVideo}
                        className="play-featured-video bg-red-600 hover:bg-red-700 rounded-full p-5 shadow-2xl transition-all duration-300 transform hover:scale-110 group-hover:scale-110 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-10 h-10"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 cursor-default">Click any video below to play here</h3>
                      <p className="text-gray-600 text-sm mt-1 cursor-default">Select a video from below to watch it in this player</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium cursor-default">
                        YouTube Ready
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-default">
                        HD Quality
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-4 shadow-lg h-full">
                <h3 className="text-lg font-bold mb-4 text-gray-800 cursor-default">Recommended Videos</h3>
                <ScrollArea className="h-[500px] pr-3">
                  <div className="space-y-4">
                    {sideVideos.map((video) => (
                      <button
                        key={video.id}
                        onClick={() => handleVideoClick(video)}
                        className="group flex items-start gap-3 p-3 hover:bg-white hover:shadow-md transition-all rounded-lg w-full text-left border border-gray-100 cursor-pointer"
                      >
                        <div className="relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform cursor-pointer"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/60 group-hover:bg-red-600 rounded-full p-1 transition-colors cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="w-4 h-4"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h4 className="text-sm font-medium line-clamp-2 group-hover:text-red-600 transition-colors cursor-pointer">
                            {video.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-500 cursor-default">PakWheels</span>
                            <span className="text-xs text-gray-500 cursor-default">•</span>
                            <span className="text-xs text-gray-500 cursor-default">10:24</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Show Search Results if searching */}
      {showSearchResults ? (
        <SearchResults />
      ) : (
        <>
          {/* Original Owner's Reviews Section */}
          <VideoSection 
            title="Owner's Reviews" 
            videos={ownerReviews} 
            bgColor="bg-gray-50"
            onVideoClick={handleVideoClick}
          />

          {/* All Additional Sections */}
          {additionalSections.map((section, index) => (
            <VideoSection
              key={index}
              title={section.title}
              videos={section.videos}
              bgColor={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              onVideoClick={handleVideoClick}
            />
          ))}
        </>
      )}
    </>
  );
}