<script lang="ts">
    import { pickRandom } from "$lib";

    const nutrients = [
        "탄수화물",
        "단백질",
        "물",
        "지방",
        "칼슘",
        "철",
        "비타A",
        "비타D",
        "비타B<sub>1</sub>",
        "비타B<sub>2</sub>",
        "비타C",
    ] as const;

    type Nutrient = (typeof nutrients)[number];

    const nutrientKeys = ["주요 기능", "결핍증", "함유 식품"] as const;

    type NutrientKey = (typeof nutrientKeys)[number];
    const nutrientMap: Record<Nutrient, Record<NutrientKey, string>> = {
        탄수화물: {
            "주요 기능":
                "에너지를 공급하는 주된 영양소 (1g당 4kcal), 뇌는 포도당만을 에너지원으로 사용",

            결핍증: "탄수화물 대신 지방이나 단백질이 에너지로 쓰이면서 근육이 줄거나 체중이 감소함",

            "함유 식품":
                "당류: 초콜릿, 사탕, 설탕, 꿀 등 / 녹말: 밥, 빵, 국수, 감자, 고구마 등",
        },

        단백질: {
            "주요 기능":
                "손가락, 손톱, 피부, 혈액, 머리카락 등 신체 조직 구성, 효소와 호르몬의 구성 성분 및 생리 기능 조절, 탄수화물로는 부족할 때 에너지 공급 (1g당 4kcal)",

            결핍증: "근육에 저장되어 있던 단백질 사용 → 성장 부진, 면역력 저하",

            "함유 식품": "고기, 생선, 계란, 콩, 두부 등",
        },

        물: {
            "주요 기능":
                "혈액의 주성분, 영양소 운반, 체온 조절, 소변과 땀으로 노폐물 배출, 우리 몸의 65~70%를 구성",

            결핍증: "생명이 위험",

            "함유 식품": "많음 ㅋㅋ",
        },

        지방: {
            "주요 기능":
                "효율적인 에너지 공급 영양소 (1g당 9kcal), 내장 기관 보호, 체온 유지, 지용성 비타민의 흡수 및 운반 도움",

            결핍증: "혈관이 약해짐, 피부가 거칠어짐, 지용성 비타민의 흡수가 잘 안 됨",

            "함유 식품":
                "포화 지방산: 돼지비계와 소고기의 지방, 닭껍질, 버터 등 / 불포화 지방산: 등 푸른 생선, 올리브유, 참기름·들기름, 견과류 등",
        },

        칼슘: {
            "주요 기능": "뼈와 이를 구성",

            결핍증: "골다공증, 골연화증 등",

            "함유 식품": "우유, 유제품, 뼈째 먹는 생선 (멸치 등) 등",
        },

        철: {
            "주요 기능":
                "혈액 속 적혈구를 구성하는 헤모글로빈의 성분, 산소 운반",

            결핍증: "빈혈 등",

            "함유 식품": "간, 쇠고기, 달걀노른자, 진한 녹색 채소 등",
        },

        비타A: {
            "주요 기능": "성장 촉진, 시력 조절",

            결핍증: "성장 부진, 야맹증",

            "함유 식품": "간, 달걀노른자, 녹황색 채소 (당근 등) 등",
        },

        비타D: {
            "주요 기능": "칼슘과 인의 흡수를 도와 뼈와 이를 튼튼하게 함",

            결핍증: "구루병, 골다공증",

            "함유 식품": "간, 버섯, 생선, 달걀노른자 등",
        },

        "비타B<sub>1</sub>": {
            "주요 기능": "에너지 대사를 도움",

            결핍증: "각기병, 피로함",

            "함유 식품": "돼지고기, 현미, 콩 등",
        },

        "비타B<sub>2</sub>": {
            "주요 기능": "에너지 대사를 도움",

            결핍증: "설염, 입술염, 구내염",

            "함유 식품": "육류, 생선, 우유, 유제품 등",
        },

        비타C: {
            "주요 기능": "철 흡수 지원, 상처 회복, 항산화 작용",

            결핍증: "괴혈병, 상처 치유 지연",

            "함유 식품": "채소류, 과일류 등",
        },
    };

    let nutrient = $state<Nutrient>();
    let nutrientKey = $state<NutrientKey>();

    let answer = $derived(
        nutrient && nutrientKey ? nutrientMap[nutrient][nutrientKey] : "",
    );

    let input = $state("");
    let revealed = $state(false);

    const reveal = () => (revealed = !revealed);

    function pickNutrientPair() {
        nutrient = pickRandom(nutrients);
        nutrientKey = pickRandom(nutrientKeys);

        input = "";
        revealed = false;
    }

    pickNutrientPair();
</script>

<section class="noto-sans" lang="ko">
    <h1>영양소 설명 맟히기 게임</h1>

    <p>
        암기하려면 <a href="/amgi/tests/1-2/giga-1">여기</a>로 가시오
    </p>

    <h2>
        {@html nutrient}의 {nutrientKey}을(를) 말하시오.
    </h2>

    <p>
        답 (선택하여 공개): <span class="answer" class:revealed>{answer}</span>
    </p>

    <input
        type="text"
        bind:value={input}
        placeholder="입력란"
        onkeydown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
                pickNutrientPair();
            } else if (e.key === "Enter") {
                reveal();
            }
        }}
    />

    <button onclick={reveal}> 공개 </button>
    <button onclick={pickNutrientPair}> 새로 뽑기 </button>
</section>

<style lang="css">
    .answer {
        background: black;
        color: black;
    }

    .answer::selection,
    .answer.revealed {
        background: black;
        color: white;
    }
</style>
