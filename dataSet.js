var dataSet = [
    //RAK DRÓG ŻÓŁCIOWYCH
    ['MK-3475-158', 'MSI-H', 'RAK DRÓG ŻÓŁCIOWYCH', 'https://clinicaltrials.gov/study/NCT02628067'],
    //RAK JELITA GRUBEGO
    ['MK1084-001','KRAS G12C','RAK JELITA GRUBEGO','https://clinicaltrials.gov/study/NCT05067283'],
    ['D9720C00001 Petra','HER2 IHC 2+, BRAF wt','RAK JELITA GRUBEGO','https://clinicaltrials.gov/study/NCT04644068'],
    ['AbbVie M21-404','MSS, bez mutacji BRAF V600E','RAK JELITA GRUBEGO','https://clinicaltrials.gov/study/NCT05029882?rank=1'],
    //RAK NERKI
    ['TESARO 4010-01-001','dMMR/MSI-H','RAK NERKI','https://clinicaltrials.gov/study/NCT02715284'],
    //RAK JELITA CIENKIEGO
    ['MK-3475-158','MSI-H','RAK JELITA CIENKIEGO','https://clinicaltrials.gov/study/NCT02628067'],
    //RAK JAJNIKA
    ['TESARO 4010-01-001','dMMR/MSI-H','RAK JAJNIKA','https://clinicaltrials.gov/study/NCT02715284'],
    ['IMC-F106C-101','PRAME H-score ≥ 25','RAK JAJNIKA','https://clinicaltrials.gov/study/NCT04262466'],
    ['D9720C00001 Petra','Mutacja utraty funkcji u BRCA1, BRCA2, PALB2, RAD51C lub RAD51D lub wysoki poziom niestabilności genomowej (bez mutacji utraty funkcji u BRCA1, BRCA2','RAK JAJNIKA','https://clinicaltrials.gov/study/NCT04644068'],
    //RAK PĘCHERZA MOCZOWEGO/UROTELIALNY
    ['TESARO 4010-01-001','dMMR/MSI-H','RAK PĘCHERZA MOCZOWEGO/UROTELIALNY','https://clinicaltrials.gov/study/NCT02715284'],
    ['BOEHRINGER INGELHEIM 1403-0001','typ dziki TP53, obecna amplifikacja MDM2','RAK PĘCHERZA MOCZOWEGO/UROTELIALNY','https://clinicaltrials.gov/study/NCT03449381'],
    ['TROPION - PanTumor03','','RAK PĘCHERZA MOCZOWEGO/UROTELIALNY','https://clinicaltrials.gov/study/NCT05489211'],
    //RAK Piersi
    ['TESARO 4010-01-001','dMMR/MSI-H','RAK PIERSI','https://clinicaltrials.gov/study/NCT02715284'],
    ['D9720C00001 Petra','HER2-low (IHC 1+ lub IHC 2+/ISH-negative)','RAK PIERSI','https://clinicaltrials.gov/study/NCT04644068'],
    ['D6900C00001','HER2-negative, HR+, dodatnia ekspresja B7-H4','RAK PIERSI','https://clinicaltrials.gov/study/NCT05123482'],
    //RAK PŁUCA
    ['MK-1084-001','KRAS G12C','RAK PŁUCA','https://clinicaltrials.gov/study/NCT06345729'],
    ['TESARO 4010-01-001','dMMR/MSI-H','RAK PŁUCA','https://clinicaltrials.gov/study/NCT02715284'],
    ['CLN-619-001/MICA','Mutacja EGFR, rearanżacja ALK','RAK PŁUCA','https://clinicaltrials.gov/study/NCT05117476'],
    ['IMC-F106C-101','Mutacja EGFR albo rearanżacja ALK lub RET albo fuzja NTRK, PRAME H-Score 100-199 lub PRAME H-Score ≥ 200, status mutacji EGFR, rearanżacji ALK i RET, fuzji NTRK','RAK PŁUCA','https://clinicaltrials.gov/study/NCT04262466'],
    ['BNT116-01','','RAK PŁUCA','https://www.clinicaltrials.gov/study/NCT05142189'],
    //RAK PROSTATY
    ['TESARO 4010-01-001','dMMR/MSI-H','RAK PROSTATY','https://clinicaltrials.gov/study/NCT02715284'],
    ['C2321001','','RAK PROSTATY','https://clinicaltrials.gov/study/NCT03460977'],
    //RAK REGIONU SZYI I GŁOWY
    ['TESARO 4010-01-001','dMMR/MSI-H','RAK REGIONU SZYI I GŁOWY','https://clinicaltrials.gov/study/NCT02715284'],
    //RAK SKÓRY
    ['TESARO 4010-01-001','dMMR/MSI-H','RAK SKÓRY','https://clinicaltrials.gov/study/NCT02715284'],
    //RAK SZYJKI MACICY
    ['TESARO 4010-01-001','dMMR/MSI-H','RAK SZYJKI MACICY','https://clinicaltrials.gov/study/NCT02715284'],
    //RAK TARCZYCY
    ['TESARO 4010-01-001','dMMR/MSI-H','RAK TARCZYCY','https://clinicaltrials.gov/study/NCT02715284'],
    //RAK TRZONU MACICY
    ['MICA CLN-619-001','','RAK TRZONU MACICY','https://clinicaltrials.gov/study/NCT05117476'],
    ['D6900C00001','Dodatnia ekspresja B7-H4','RAK TRZONU MACICY','https://clinicaltrials.gov/study/NCT05123482'],
    //RAK TRZUSTKI
    ['BOEHRINGER INGELHEIM 1403-0001','typ dziki TP53, obecna amplifikacja MDM2','RAK TRZUSTKI','https://clinicaltrials.gov/study/NCT03449381'],
    //RAK ŻOŁĄDKA
    ['BOEHRINGER INGELHEIM 1403-0001','typ dziki TP53, obecna amplifikacja MDM2','RAK ŻOŁĄDKA','https://clinicaltrials.gov/study/NCT03449381'],
    ['MK-3475-158','MSI-H','RAK ŻOŁĄDKA','https://clinicaltrials.gov/study/NCT02628067'],
    ['D9720C00001 Petra','HER2-low (IHC 1+ lub IHC 2+/ISH-negative)','RAK ŻOŁĄDKA','https://clinicaltrials.gov/study/NCT04644068'],
    //MIĘDZYBŁONIAK
    ['TESARO 4010-01-001','dMMR/MSI-H','MIĘDZYBŁONIAK','https://clinicaltrials.gov/study/NCT02715284'],
    //MIĘSAKI
    ['TESARO 4010-01-001','dMMR/MSI-H','MIĘSAKI','https://clinicaltrials.gov/study/NCT02715284'],
    ['ANNA-SARC','','MIĘSAKI','https://clinicaltrials.gov/study/NCT05518526'],
    //CZERNIAK
    ['ASND0029','','CZERNIAK','https://clinicaltrials.gov/study/NCT05081609'],
    ['TAPISTRY BO41932','Fuzja ROS1, Fuzja NTRK1/2/3, Fuzja ALK','CZERNIAK','https://www.clinicaltrials.gov/study/NCT04589845'],
    //basket studies
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK KANAŁU ODBYTU','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK DRÓG ŻÓŁCIOWYCH','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK PĘCHERZA MOCZOWEGO/UROTELIALNY','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','GUZ MÓZGU','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK SZYJKI MACICY','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK ENDOMETRIUM','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK PRZEŁYKU','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK ŻOŁĄDKA','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK REGIONU SZYI I GŁOWY','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK NERKI','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','MIĘDZYBŁONIAK','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK JAJNIKA','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK TRZUSTKI','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK PROSTATY','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','MIĘSAKI','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK PŁUCA','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK JELITA CIENKIEGO','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK TARCZYCY','https://clinicaltrials.gov/study/NCT02628067'],
    ['MK-3475-158','MS-Stable, TMB>10 mut/Mpz','RAK SROMU','https://clinicaltrials.gov/study/NCT02628067'],

    //Tumor agnostic
    ['AbbVie M21-404','Znana mutacja w genie MET','Różne rozpoznania','https://clinicaltrials.gov/study/NCT05029882']
];