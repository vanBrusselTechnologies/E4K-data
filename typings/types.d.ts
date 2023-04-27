declare module 'e4k-data' {
    interface E4KData {
        country: Countries;
        data: Data;
        imageData: ImagesData;
        imageBaseUrl: string;
        languages: Languages;
        network: Network;
    }

    const e4KData: E4KData;
    export = e4KData;
}

///region Country
export interface Countries {
    versionNo: number,
    deployTime: number,
    AR: Country,
    ARAB: Country,
    ASIA: Country,
    AU: Country,
    BR: Country,
    CN: Country,
    DE: Country,
    DK: Country,
    ES: Country,
    FI: Country,
    FR: Country,
    GB: Country,
    GR: Country,
    HISP: Country,
    ID: Country,
    IN: Country,
    IT: Country,
    JP: Country,
    KR: Country,
    MX: Country,
    NL: Country,
    NO: Country,
    PH: Country,
    PL: Country,
    PT: Country,
    RU: Country,
    SE: Country,
    TR: Country,
    US: Country,
    XX: Country,
    AE: Country,
    HANT: Country,
}

export interface Country {
    country: string,
    lang: string,
    flashCode: string,
    timezoneStart: number,
    timezoneEnd: number,
    browserCodes: string,
    geoIpCodes: string,
    np: string,
}

///endregion

///region Data
export interface Data {
    achievements: Achievement[],
    activityrewards: ActivityReward[],
    alienRerollChances: AlienReRollChance[],
    allianceBattleGroundDungeons: AllianceBattleGroundDungeon[],
    allianceBattleGroundMaps: AllianceBattleGroundMap[],
    allianceBattleGroundPreBuiltCastles: AllianceBattleGroundPreBuiltCastle[],
    allianceBattleGroundRankRewards: AllianceBattleGroundRankReward[],
    allianceBattleGroundScorings: AllianceBattleGroundScoring[],
    allianceBattleGroundSettings: AllianceBattleGroundSetting[],
    alliancebuffs: AllianceBuff[],
    alliancefameranks: AllianceFameRank[],
    allianceforges: AllianceForge[],
    alliancehelprequests: AllianceHelpRequest[],
    allianceInvasionCamps: AllianceInvasionCamp[],
    alliancerankrights: AllianceRankRight[],
    allianceranks: AllianceRank[],
    allianceTowerEffects: AllianceTowerEffect[],
    allianceTowerEffectsActivations: AllianceTowerEffectsActivation[],
    allianceTowers: AllianceTower[],
    artifacts: Artifact[],
    artifactsLeagues: ArtifactLeague[],
    attackSetupSlots: AttackSetupSlot[],
    backgrounds: Background[],
    beginner_loginrewards: BeginnerLoginReward[],
    boostConsumables: BoostConsumable[],
    boosttypes: BoostType[],
    bossdungeons: BossDungeon[],
    buildingPositions: BuildingPosition[],
    buildings: Building[],
    catalysts: Catalyst[],
    characters: Character[],
    chargesCampEffects: ChargesCampEffect[],
    chargesCamps: ChargesCamp[],
    chargesPVPEffects: ChargesPVPEffect[],
    collectorEventOptions: CollectorEventOption[],
    collectorEventRewards: CollectorEventReward[],
    constructionItemDisassemblingTombolas: ConstructionItemDisassemblingTombola[],
    constructionItemRecipes: ConstructionItemRecipe[],
    constructionItems: ConstructionItem[],
    constructionItemsEffectGroups: ConstructionItemsEffectGroup[],
    craftingQueues: CraftingQueue[],
    craftingRecipes: CraftingRecipe[],
    crestsymbols: CrestSymbol[],
    currencies: Currency[],
    currencyBoosters: CurrencyBooster[],
    currencyCaps: CurrencyCap[],
    currencyClearCompensations: CurrencyClearCompensation[],
    currencyCollectTaskTypes: CurrencyTaskType[],
    currencyMinutesSkipValues: CurrencyMinutesSkipValue[],
    currencyRandomBonuses: CurrencyRandomBonus[],
    currencyRarenesses: CurrencyRareness[],
    currencySpendTaskTypes: CurrencyTaskType[],
    currencyTypes: CurrencyType[],
    dailyactivities: DailyActivity[],
    dailyrewards: DailyReward[],
    daimyoCastleAllianceContracts: DaimyoAllianceContract[],
    daimyoCastles: DaimyoCastle[],
    daimyoEndRewards: DaimyoEndReward[],
    daimyoTownshipAllianceContracts: DaimyoAllianceContract[],
    daimyoTownships: DaimyoTownship[],
    decoThresholds: DecoThreshold[],
    districtTypes: DistrictType[],
    dungeons: Dungeon[],
    effectCaps: EffectCap[],
    effects: Effect[],
    effecttypes: EffectType[],
    emptyAreas: EmptyArea[],
    equipments: Equipment[],
    equipment_drops: EquipmentDrop[],
    equipment_effects: EquipmentEffect[],
    equipment_effectstrengths: EquipmentEffectStrength[],
    equipment_gem_effects: EquipmentGemEffect[],
    equipment_groups: EquipmentGroup[],
    equipment_rarenesses: EquipmentRareness[],
    equipment_sets: EquipmentSet[],
    equipment_slots: EquipmentSlot[],
    equipment_wearers: EquipmentWearer[],
    eventAutoScalingCamps: EventAutoScalingCamp[],
    eventAutoScalingCIs: EventAutoScalingCI[],
    eventAutoScalingDifficulties: EventAutoScalingDifficulty[],
    eventAutoScalingDifficultyTypes: EventAutoScalingDifficultyType[],
    eventAutoScalingHoLSkills: EventAutoScalingHoLSkill[],
    eventAutoScalingLordEffects: EventAutoScalingLordEffect[],
    eventAutoScalings: EventAutoScaling[],
    eventAutoScalingToolPairings: EventAutoScalingPairing[],
    eventAutoScalingUnitPairings: EventAutoScalingPairing[],
    events: Event[],
    eventSkins: EventSkin[],
    expansions: Expansion[],
    externalServerSkins: ExternalServerSkin[],
    feasts: Feast[],
    forgeMinuteSkips: ForgeMinuteSkip[],
    fortuneTellerClasses: FortuneTellerClass[],
    fusionCostSequences: FusionCostSequence[],
    fusionForges: FusionForge[],
    fusionShops: FusionShop[],
    fusionSystems: FusionSystem[],
    gemColors: GemColor[],
    gemlevels: GemLevel[],
    gems: Gem[],
    generalAbilities: GeneralAbility[],
    generalAbilityEffects: GeneralAbilityEffect[],
    generalAbilityTriggers: GeneralAbilityTrigger[],
    generalRarities: GeneralRarity[],
    generals: General[],
    generalSkills: GeneralSkill[],
    generalSkillTiers: GeneralSkillTier[],
    generalSkipFinishQuests: GeneralSkipFinishQuest[],
    generalSlots: GeneralSlot[],
    generalsRespecPackages: GeneralsReSpecPackage[],
    generalXpItems: GeneralXPItem[],
    globalEffects: GlobalEffect[],
    highscoreboni: HighscoreBonus[],
    horses: Horse[],
    inviterewardsteps: InviteRewardStep[],
    islandPlayerRewards: IslandPlayerReward[],
    islandPreBuiltCastles: IslandPreBuiltCastle[],
    islandrewardranks: IslandRewardRank[],
    isles: Isle[],
    isoObjects: ISOObject[],
    isoResources: ISOResource[],
    kingdoms: Kingdom[],
    kingsMarkets: KingsMarket[],
    landmarks: Landmark[],
    leaguetypeevents: LeagueTypeEvent[],
    leaguetypes: LeagueType[],
    leaguetypeTopXSizes: LeagueTypeTopXSize[],
    legendskills: LegendSkill[],
    legendskillthresholds: LegendSkillThreshold[],
    levelBoosters: LevelBooster[],
    levelbrackets: LevelBracket[],
    levelUpPrices: LevelUpPrice[],
    levelups: LevelUp[],
    longtermpointeventquests: LongTermPointEventQuest[],
    lootBoxes: LootBox[],
    lootBoxKeyTombolas: LootBoxKeyTombola[],
    lootBoxTombolas: LootBoxTombola[],
    lootBoxTypes: LootBoxType,
    lords: Lord[],
    luckywheelclasses: LuckyWheelClass[],
    LuckyWheelDropChanceHardJackpots: LuckyWheelDropChanceHardJackpot[],
    LuckyWheelDropChanceJackpots: LuckyWheelDropChanceJackpot[],
    LuckyWheelDropChances: LuckyWheelDropChance[],
    luckywheelrewardsets: LuckyWheelRewardSet[],
    mainquests: MainQuest[],
    merchants: Merchant[],
    mightranks: MightRank[],
    mineTypes: MineType[],
    monuments: Monument[],
    movements: Movement[],
    newsletterRewards: NewsletterReward[],
    nomadCamps: NomadCamp[],
    officersSchoolCurrencies: OfficersSchoolCurrency[],
    officersSchoolDurations: OfficersSchoolDuration,
    officersSchoolEffects: OfficersSchoolEffect[],
    officersSchoolPowerDistributions: OfficersSchoolPowerDistribution[],
    officersSchoolUnitPairs: OfficersSchoolUnitPair[],
    packageCategories: PackageCategory[],
    packageCategoryCurrencyRelations: PackageCategoryCurrencyRelation[],
    packageCategoryFilterRelations: PackageCategoryFilterRelation[],
    packageFilters: PackageFilter[],
    packages: Package[],
    packageSubFilters: PackageSubFilter[],
    partpayprices: PartPayPrice[],
    paymentrewards: PaymentReward[],
    playerNameChanges: PlayerNameChange[],
    pointeventquests: PointEventQuest[],
    pointeventrewardsets: PointEventRewardSet[],
    pointeventtypes: PointEventType[],
    prebuiltcastles: PreBuiltCastle[],
    primeDays: PrimeDay[],
    privateVillages: PrivateVillage[],
    properties: Property[],
    quests: Quest[],
    randomgroups: RandomGroup[],
    relicBluePrints: RelicBluePrint[],
    relicCategories: RelicCategory[],
    relicEffectLists: RelicEffectList[],
    relicEffectPowerRatings: RelicEffectPowerRating[],
    relicEffects: RelicEffect[],
    relicEnchanters: RelicEnchanter[],
    relicLootOptions: RelicLootOption[],
    relicPowerDistributions: RelicPowerDistribution[],
    relicTypes: RelicType[],
    rerollCosts: ReRollCost[],
    researches: Research[],
    rewardBags: RewardBag[],
    rewards: Reward[],
    saleDaysLuckyWheelClasses: SaleDaysLuckyWheelClass[],
    saleDaysLuckyWheelDropChanceJackpots: SaleDaysLuckyWheelDropChanceJackpot[],
    saleDaysLuckyWheelDropChances: SaleDaysDaysLuckyWheelDropChance[],
    saleDaysLuckyWheelInitialCategorySelections: SaleDaysLuckyWheelInitialCategorySelection[],
    saleDaysLuckyWheelRewardSets: SaleDaysLuckyWheelRewardSet[],
    samuraiCamps: SamuraiCamp[],
    sceatSkills: SceatSkill[],
    sceatSkillTiers: SceatSkillTier[],
    sceatSkillTrees: SceatSkillTree[],
    seasonEndRewards: SeasonEndReward[],
    seasonEventRewards: SeasonEventReward[],
    seasonMedals: SeasonMedal[],
    seasonPromotionRewards: SeasonPromotionReward[],
    seasonRanks: SeasonRank[],
    seasonSettings: SeasonSetting[],
    sectors: Sector[],
    shapeshifterActivityRewards: ShapeShifterActivityReward[],
    shapeshifterHardcoreModeEffects: ShapeShifterHardcoreModeEffect[],
    shapeshifterPermittedEffects: ShapeShifterPermittedEffect[],
    shapeshifterRankingRewards: ShapeShifterRankingReward[],
    shapeshifterTickets: ShapeShifterTicket[],
    shoppingCarts: ShoppingCart[],
    slums: Slum[],
    specialcamps: SpecialCamp[],
    startResources: StartResource[],
    subscriptionLoyalties: SubscriptionLoyalty[],
    subscriptionsBuffs: SubscriptionsBuff[],
    subscriptionsRewards: SubscriptionsReward[],
    surroundings: Surrounding[],
    tempServerDailyTaskRewards: TempServerDailyTaskReward[],
    tempServerPreBuiltCastles: TempServerPreBuiltCastle[],
    tempServerRankPoints: TempServerRankPoint[],
    tempServerRankRewards: TempServerRankReward[],
    tempServerSettings: TempServerSetting[],
    titles: Title[],
    tmapnodes: TMapNode[],
    tmaps: TMap[],
    toolCategories: ToolCategory[],
    townsfolk: Townsfolk[],
    units: Unit[],
    version: Version,
    versionInfo: VersionInfo,
    villages: Village[],
    viplevels: VIPLevel[],
    welcomeBackRewards: WelcomeBackReward[],
    wishingwells: WishingWell[],
    wodIds: Wod[],
    worldmapskins: WorldmapSkin[],
}

export interface Achievement {
    achievementID: number;
    requiredAchievementID: number;
    achievementSeriesID: number;
    achievementSeriesNumber: number;
    numberOfAchievementsInSeries: number;
    category: string;
    shownKingdomID?: number;
    triggerKingdomID: number;
    conditions: string;
    achievementPoints: number;
    currency2?: number;
    crestSymbolIDs?: number;
    googleGameCenterId?: string;
    googlePolGameCenterId?: string;
    hidden?: number;
    mapID?: number;
    runsParallelForServer?: number;
    hideIconText?: number;
    unlocksDifficulty?: number;
}

export interface ActivityReward {
    activityRewardID: number;
    nextActivityRewardID?: number;
    rewardID: number;
    waitingTime: number;
}

export interface AlienReRollChance {
    alienRerollChancesID: number;
    amountUnits: number;
    chance: number;
    isSoftCurrency?: number;
    isHardCurrency?: number;
}

export interface AllianceBattleGroundDungeon {
    allianceBattleGroundDungeonID: number;
    dungeonlevel: number;
    allianceBattleGroundScoringID: number;
    countVictory: number;
    skipCost: number;
    coolDown: number;
    defStrength: number;
    defenceUnits: string;
    defenceTools: string;
    dungeonPToolStacks: number;
    dungeonNPToolStacks: string | number;
    wallBonus: number;
    gateBonus: number;
    lordID: number;
    guards: number;
    unitWallCount: number;
    lootc1: number;
    lootResources: number;
    lootWoodPercentMin: number;
    lootWoodPercentMax: number;
    lootStonePercentMin: number;
    lootStonePercentMax: number;
}

export interface AllianceBattleGroundMap {
    mapID: number;
    name: string;
}

export interface AllianceBattleGroundPreBuiltCastle {
    preBuiltCastleID: number;
    questsToFinish?: string;
    startPlayerLevel: number;
    startResourceID: number;
    costC2?: number;
}

export interface AllianceBattleGroundRankReward {
    allianceBattleGroundRankRewardID: number;
    allianceBattleGroundRankID: number;
    eventID: number;
    rank: number;
    rewardID: number;
    rewardSetID: number;
}

export interface AllianceBattleGroundScoring {
    scoringID: number;
    scoring: string;
    metropolisDecay?: number;
    kingstowerDecay?: number;
    playerSteal?: number;
    allianceSteal?: number;
}

export interface AllianceBattleGroundSetting {
    settingID: number;
    presetIDs: string;
    scoringID: number;
    skinID: number;
    mapID: number;
    peaceDuration: number;
    metropolisLandmarkID: number;
    capitalLandmarkID: number;
    kingsTowerLandmarkID: number;
    startCurrencyAmount: number;
    currencyID: number;
    allianceCurrencyID: number;
    currencyLootFactorMin?: number;
    allianceCurrencyLootFactorMin?: number;
    boosterCurrencyID: number;
    boosterCurrencyValue: number;
    boosterCurrencyLimit: number;
    currencyLootFactorMax: number;
    boosterCurrencyPackageID: number;
    rewardSetID: number;
    allianceRewardSetID: number;
    playerRewardSetID: number;
    maxAllianceSize: number;
    dialogStatisticIDs: string;
    malusCurrencyID?: number;
    defenceTowerLossMalus?: number;
    defenceTowerLossMalusMax?: number;
    allianceFame?: number;
    allianceMight?: number;
    allianceTowerEffectIDs?: string;
}

export interface AllianceBuff {
    allianceBuffID: number;
    allianceBuffSeriesID: number;
    level: number;
    maxLevel: number;
    isDefaultLevel?: number;
    effects?: string;
    costWood?: number;
    costStone?: number;
    costC1?: number;
    costC2?: number;
    availableInAllianceFunds?: number;
    forgingCostC1?: number;
    isTemporary?: number;
    requiredBuffID?: number;
    duration?: number;
    requiredMightPoints?: number;
    requiredRankID?: number;
    requiredAllianceFame?: number;
    hiddenBattleGround?: number;
    costFuryDoubloon?: number;
    costTimeDoubloon?: number;
    isBattleground?: number;
    costVigorDoubloon?: number;
    costSpiritDoubloon?: number;
    costRampartDoubloon?: number;
    costBastionDoubloon?: number;
}

export interface AllianceFameRank {
    fameLevel: number;
    threshold: number;
    wood: number;
    stone: number;
    currency1: number;
    currency2: number;
}

export interface AllianceForge {
    allianceForgeID: number;
    level: number;
    forgingCostC1: number;
}

export interface AllianceHelpRequest {
    allianceHelpRequestID: number;
    maxHelpersCount: number;
    unitCountBonus?: number;
    unitHealTimeReduction?: number;
    allianceRepairBuilding?: number;
    decreaseBuildingTimeAbsolute?: number;
}

export interface AllianceInvasionCamp {
    allianceInvasionCampID: number;
    eventID: number;
    dungeonlevel: number;
    baseLevel: number;
    rageNeededForLevelUp?: number;
    playerRageCap?: number;
    coolDown: number;
    cooldownIncrease?: number;
    skipCost: number;
    skipCostIncrease?: number;
    increaseMultiplier?: number;
    increaseInterval?: number;
    cooldownIncreaseCap?: number;
    skipCostIncreaseCap?: number;
    defStrength: number;
    defenceUnits: string;
    defenceTools: string;
    dungeonPToolStacks: number;
    dungeonNPToolStacks: string;
    wallBonus: number;
    gateBonus: number;
    lordID: number;
    guards?: number;
    unitWallCount: number;
    addKhanTablet?: number;
    khanTabletDiff?: number;
    generatedRagePerAttack?: number;
    chanceForCriticalRageGeneration?: number;
    generatedRagePerDefense?: number;
    lootc1: number;
    lootResources: number;
    lootWoodPercentMin: number;
    lootWoodPercentMax: number;
    lootStonePercentMin: number;
    lootStonePercentMax: number;
    lootCoalPercentMin?: number;
    lootCoalPercentMax?: number;
    lootOilPercentMin?: number;
    lootOilPercentMax?: number;
    lootGlassPercentMin?: number;
    lootGlassPercentMax?: number;
    countVictory?: number;
}

export interface AllianceRankRight {
    rankRightID: number;
    rankRightName: string;
    neededMemberRank: number;
}

export interface AllianceRank {
    rankID: number;
    rankRightName: string;
    rerankRight: number;
}

export interface AllianceTowerEffect {
    allianceTowerEffectID: number;
    effectID: number;
    effectBasePrice: number;
    effectMaxLevel: number;
    effectStartValue: number;
    effectIncrease: number;
}

export interface AllianceTowerEffectsActivation {
    allianceTowerEffectsActivationID: number;
    remainingTime: number;
    cost: number;
}

export interface AllianceTower {
    allianceTowerID: number;
    countVictory: number;
    level: number;
    wallWodId: number;
    gateWodId: number;
    keepWodId: number;
    moatWodId: number;
    unitWallCount: number;
    peasants: number;
    guards: number;
    lordID: number;
    unitCapacity: number;
    addStatuette: number;
    allianceTowerLevelMultiplier: number;
    defeatedPVPBasePoints: number;
    areaSpecificEffects: string;
}

export interface Artifact {
    artifactID: number;
    artifactType: string;
    artifactParts: number;
}

export interface ArtifactLeague {
    artifactsLeagueID: number,
    groupID: number,
    minLevel: number,
    maxLevel: number,
    artifactPrice: number,
    dropFactor: number,
    exponent: number,
    offset: number,
    artifactID: number,
    rewardIDs: number,
    averageDungeonLevel: number
}

export interface AttackSetupSlot {
    slotID: number;
    costC2: number;
}

export interface Background {
    wodID: number;
    group: string;
    name: string;
    type: string;
}

export interface BeginnerLoginReward {
    beginnerLoginRewardID: number;
    rewardID: number;
}

export interface BoostConsumable {
    currencyID: number;
}

export interface BoostType {
    effectType: string;
    boostType: string;
}

export interface BossDungeon {
    kID: number,
    countVictories: number,
    dungeonlevel: number,
    cooldownDelay: number,
    attackDelayRange: number,
    lootc1: number,
    lootc2: number,
    lootFood: number,
    lootWood: number,
    lootStone: number,
    lootCoal?: number,
    lootOil?: number,
    lootGlass?: number,
    attackStrength: 1
}

export interface BuildingPosition {
    buildingPositionID: number;
    areaTypes: number;
    spaceIDs: string | number;
    buildingWodID: number;
    x: number;
    y: number;
    rotation: number;
    preBuiltCastleID?: number;
}

export interface Building {
    wodID: number;
    name: string;
    upgradeWodID?: number;
    level: number;
    requiredLevel?: number;
    earlyUnlockRequiredLevel?: number;
    group: string;
    type: number | string;
    width: number;
    height: number;
    movable?: number;
    kIDs?: string | number;
    unitWallCount?: number;
    destructable?: number;
    tempServerDestructable?: number;
    burnable?: number;
    tempServerBurnable?: number;
    smashable?: number;
    maximumCount?: number;
    costWood?: number;
    costStone?: number;
    buildDuration?: number;
    lowLevelBuildDuration?: string;
    xp?: number;
    mightValue?: number;
    decoPoints?: number;
    sortOrder?: number;
    tempServerCostWood?: number;
    tempServerCostStone?: number;
    tempServerTime?: number;
    downgradeWodID?: number;
    requiredLegendLevel?: number;
    costLegendaryToken?: number;
    costLegendaryMaterial?: number;
    sceatSkillLocked?: number;
    effectLocked?: number;
    comment1?: number | string;
    comment2?: number | string;
    shopCategory?: string;
    buildingGroundType?: string;
    costC2?: number;
    sightRadiusBonus?: number;
    districtTypeID?: number;
    canBePrimeSaleOffer?: number;
    rotateType?: number;
    moatBonus?: number;
    costGlass?: number;
    costIron?: number;
    hideForLevelUp?: number;
    wallBonus?: number;
    gateBonus?: number;
    constructionItemGroupIDs?: number | string;
    Woodproduction?: number;
    Stoneproduction?: number;
    Foodproduction?: number;
    Hideout?: number;
    woodStorage?: number;
    stoneStorage?: number;
    foodStorage?: number;
    coalStorage?: number;
    oilStorage?: number;
    glassStorage?: number;
    aquamarineStorage?: number;
    ironStorage?: number;
    areaSpecificEffects?: string;
    buildSpeedBoost?: number;
    honeyStorage?: number;
    meadStorage?: number;
    unlockIDs?: string;
    stackSize?: number;
    potionable?: number;
    recruitSpeedBoost?: number;
    effects?: string;
    isRelicBuilding?: number;
    onlyInAreaTypes?: string | number;
    sellLegendaryToken?: number;
    sellLegendaryMaterial?: number;
    isDistrict?: number;
    districtSlots?: number;
    Population?: number;
    marketCarriages?: number;
    earlyUnlockIceSortOrder?: number;
    spySize?: number;
    costOil?: number;
    costCoal?: number;
    baronSize?: number;
    commanderSize?: number;
    guardSize?: number;
    fireBrigadeBoost?: number;
    unlockHorses?: string;
    shownTravelBonus?: number;
    mineTypeID?: number;
    requiredPrivateOffer?: number;
    buildingCostReduction?: number;
    surviveBoost?: number;
    hospitalCapacity?: number;
    hospitalSlots?: number;
    hunterRatio?: number;
    hunterMax?: number;
    hiddenSoldiersSpace?: number;
    constructionSlotCount?: number;
    researchBoost?: number;
    palaceUnlockID?: string;
    isNotBattleGround?: number;
    damageTreshold?: number;
    isBattleGround?: number;
    alliFoodProductionBonus?: number;
    scoringID?: number;
    skinID?: number;
    eventIDs?: number | string;
    useTypeForClassName?: number;
    mapIDs?: string;
    unitSize?: number;
    Moral?: number;
    auxiliaryCapacity?: number;
    costAquamarine?: number;
    islandAlliancePoints?: number;
    forcedPosition?: number;
    aquamarineHideout?: number;
    relicFragmentBoost?: number;
    isRelicEnchanter?: number;
    addEquipmentStorageCapacity?: number;
    addGemStorageCapacity?: number;
    skillPoints?: number;
    kingdomFameBoost?: number;
    xpBoostPercentage?: number;
    offensiveToolsSpeedBoost?: number;
    defensiveToolsSpeedBoost?: number;
    craftingQueueId?: number;
    Woodboost?: number;
    Stoneboost?: number;
    Foodboost?: number;
    Foodreduction?: number;
    Coalproduction?: number;
    slumLevelNeeded?: number;
    Oilproduction?: number;
    Glassproduction?: number;
    Ironproduction?: number;
    Ironboost?: number;
    Coalboost?: number;
    Oilboost?: number;
    Glassboost?: number;
    Honeyproduction?: number;
    meadProduction?: number;
    honeyRatio?: number;
    foodRatio?: number;
    Meadreduction?: number;
    Meadboost?: number;
    Honeyboost?: number;
    walkable?: number;
    storeable?: number;
    sellC1?: number;
    initialFusionLevel?: number;
    isFusionSource?: number;
    isFusionTarget?: number;
    overlay?: string;
    customDeco?: number;
    server?: number;
    block?: number;
}

export interface Camp {
    countVictory: number;
    coolDown: number;
    skipCosts: number;
    defStrength: number;
    defenceUnits: string;
    defenceTools: string;
    dungeonPToolStacks: number;
    dungeonNPToolStacks: string | number;
    wallBonus: number;
    gateBonus: number;
    lordID: number;
    guards: number;
    unitWallCount: number;
}

export interface Catalyst {
    currencyID: number;
    forgeID: number;
    deprecated: number;
    maxUsableFusionLevel: number;
    tier: number;
    addDecoDust: number;
    costDecoDust: number;
}

export interface Character {
    characterID: number;
    name: string;
    spinRarities: string;
    tombolas: string;
    coolDownInSeconds: number;
    maxFreeOpenings: number;
    freeOpeningTombolaID: number;
    unluckyTotalPoints: number;
    badLuckProtectionDrawAmount: number;
    packageIDs: number;
    badLuckSpinRarities: string;
}

export interface ChargesCampEffect {
    chargeCampEffectID: number;
    effectID: number;
    levelIncrease: number;
    maxValue: number;
}

export interface ChargesCamp {
    countVictory: number;
    coolDown: number;
    skipCosts: number;
    addTonic: number;
    tonicDiff: number;
    defStrength: number;
    defStrengthIncrease: number;
    defenceUnits: string;
    wallBonus: number;
    gateBonus: number;
    lordID: number;
    unitWallCount: number;
}

export interface ChargesPVPEffect {
    chargePVPEffectID: number;
    effectID: number;
    effectIncrease: number;
}

export interface CollectorEventOption {
    collectorEventOptionID: number;
    collectorCurrencyID: number;
    collectorKeyCurrencyID: number;
    collectorKeyBoost: number;
    collectorKeyLimit: number;
    collectorKeyPackageID: number;
    baseCollectorBoost: number;
    eventStartCurrencyAmount: number;
    dailyCurrencyIncrease: number;
    collectorEventSkinName: string;
    collectorEventColor?: string;
    crestType: number;
    crestColors: string;
}

export interface CollectorEventReward {
    collectorEventRewardsID: number;
    eventOptionID: number;
    minCurrencyAmount: number;
    rewardID: number;
}

export interface ConstructionItemDisassemblingTombola {
    constructionItemDisassemblingTombolaID: number;
    tombolaID: number;
    shares: number;
    rewardID: number;
}

export interface ConstructionItemRecipe {
    constructionItemRecipeID: number;
    blueprintID: number;
    constructionItemID: number;
    craftingDuration: number;
    defaultUnlocked?: number;
    costCommonFinesand?: number;
    costCommonBricks?: number;
    costRareFlint?: number;
    costEpicResin?: number;
    costLegendarySoulstone?: number;
    costRareFarmingtools?: number;
    costCommonPurifiedwater?: number;
    costCommonClay?: number;
    costRarePaint?: number;
    costRareRope?: number;
    costEpicPreciousmetals?: number;
    costLegendaryMagmastone?: number;
    costCommonTimber?: number;
    costCommonStraw?: number;
    costRareNails?: number;
    costRareGlue?: number;
    costEpicCobblestone?: number;
    costLegendaryFabric?: number;
    neededConstructionItemID?: number;
}

export interface ConstructionItem {
    constructionItemID: number;
    comment1: string;
    comment2: string;
    name: string;
    constructionItemGroupID: number;
    level: number;
    rarenessID: number;
    slotTypeID: number;
    constructionItemEffectGroupID: number;
    recruitCostReduction?: number;
    removalCostC1?: number;
    lockRemoval?: string;
    addCommonFinesand?: number;
    addCommonBricks?: number;
    addRareFlint?: number;
    addEpicResin?: number;
    addLegendarySoulstone?: number;
    stackSize?: number;
    foodStorage?: number;
    addRareFarmingtools?: number;
    healSpeed?: number;
    recruitSpeedBoost?: number;
    unitWallCount?: number;
    unboostedFoodProduction?: number;
    Foodproduction?: number;
    unboostedWoodProduction?: number;
    Woodproduction?: number;
    unboostedStoneProduction?: number;
    Stoneproduction?: number;
    marketCarriages?: number;
    offensiveToolsCostsReduction?: number;
    defensiveToolsCostsReduction?: number;
    espionageTravelBoost?: number;
    hospitalCapacity?: number;
    woodStorage?: number;
    stoneStorage?: number;
    surviveBoost?: number;
    offensiveToolsSpeedBoost?: number;
    defensiveToolsSpeedBoost?: number;
    ReduceResearchResourceCosts?: number;
    XPBoostBuildBuildings?: number;
    addCommonPurifiedwater?: number;
    addCommonClay?: number;
    addRarePaint?: number;
    addRareRope?: number;
    isPremium?: number;
    addCommonTimber?: number;
    addCommonStraw?: number;
    addRareNails?: number;
    addRareGlue?: number;
    ownerGlobalEffect?: number;
    effects?: string;
    addEpicCobblestone?: number;
    addLegendaryFabric?: number;
    meadStorage?: number;
    honeyStorage?: number;
    decoPoints?: number;
    duration?: number;
    disassemblingTombolaID?: number;
    feastCostsReduction?: number;
}

export interface ConstructionItemsEffectGroup {
    constructionItemEffectGroupID: number;
    constructionItemGroupID: number | string;
    areaLimit: number;
}

export interface CraftingQueue {
    craftingQueueId: number;
    queueTypeId: number;
    permanentProductionSlots: number;
    productionSlotUnlockCostC1: number;
    productionSlotUnlockDuration: number;
    permanentQueueSlots: number;
    queueSlotUnlockCostC1: string;
    queueSlotUnlockDuration: number;
}

export interface CraftingRecipe {
    craftingRecipeId: number;
    recipeGroupID: number;
    level: number;
    type: string;
    queueTypeId: number;
    craftingDuration: number;
    skipCostC2: number;
    costWood?: number;
    rewardIDs: number;
    researchGroupID?: number;
    costC2?: number;
    costStone?: number;
    costRefinedLumber?: number;
    costCoal?: number;
    costOil?: number;
    costRefinedStone?: number;
    costGlass?: number;
    costIron?: number;
}

export interface CrestSymbol {
    crestSymbolID: number;
    comment1: string;
    requiredAchievementID?: number;
    costC1?: number;
    effects?: string;
    costC2?: number;
}

export interface Currency {
    currencyID: number;
    Name: string;
    JSONKey: string;
    assetName?: string;
}

export interface CurrencyBooster {
    currencyID: number;
    currencyBoosterName: string;
}

export interface CurrencyCap {
    currencyID: number;
    softCap: number;
    hardCap: number;
    hideClientCapDisplay?: number;
}

export interface CurrencyClearCompensation {
    currencyClearCompensationID: number;
    currencyID: number;
    minCurrencyAmount: number;
    rewardID: number;
}

export interface CurrencyTaskType {
    currencyID: number;
    taskType: string;
}

export interface CurrencyMinutesSkipValue {
    currencyID: number;
    MinutesSkipValue: number;
    MinuteSkipIndex: number;
}

export interface CurrencyRandomBonus {
    currencyID: number;
    RandomBonusName: string;
}

export interface CurrencyRareness {
    currencyID: number;
    rareness: number;
}

export interface CurrencyType {
    typeID: number;
    typeName: string;
    currencyIDRange: string;
}

export interface DailyActivity {
    dailyQuestID: number;
    triggerKingdomID: number;
    conditions: string;
    isDefaultQuest?: number;
    add1MinSkip?: number;
    add5MinSkip?: number;
    add10MinSkip?: number;
    add30MinSkip?: number;
    levelCalculated?: number;
    units?: string;
    minLevel?: number;
    needsAlliance?: number;
    isTempServerQuest?: number;
    addDailyDutyPoints?: number;
}

export interface DailyReward {
    dailyRewardID: number;
    rewardPoints: number;
    currency1?: string;
    wood?: string;
    stone?: string;
    food?: string;
    unitA?: string;
    unitB?: string;
    equipment?: string;
    unitC?: string;
}

export interface DaimyoAllianceContract {
    id: number;
    rank: number;
    enableOnStart?: number;
    nextContract: number;
    shogunPoints: number;
    warEffortPoints: number;
}

export interface DaimyoCastle {
    id: number,
    rank: number,
    level: number,
    shogunPointsNeededForLevelUp: number,
    coolDown: number,
    cooldownIncrease: number,
    cooldownIncreaseCap: number,
    skipCost: number,
    skipCostIncrease: number,
    skipCostIncreaseCap: number,
    wallBonus: number,
    gateBonus: number,
    moatBonus: number,
    guards: number,
    unitWallCount: number,
    addShogunPoint: number,
    addSamuraiMedal: number,
    lootc1: number,
    lootResources: number,
    lootWoodPercentMin: number,
    lootWoodPercentMax: number,
    lootStonePercentMin: number,
    lootStonePercentMax: number,
    lootCoalPercentMin?: number,
    lootCoalPercentMax?: number,
    lootOilPercentMin?: number,
    lootOilPercentMax?: number,
    lootGlassPercentMin?: number,
    lootGlassPercentMax?: number
}

export interface DaimyoEndReward {
    id: number;
    rewardSetID: number;
    minHighscoreRank: number;
    rewardIDs: string;
}

export interface DaimyoTownship {
    id: number,
    rank: number,
    level: number,
    shogunPointsNeededForLevelUp: number,
    coolDown: number,
    cooldownIncrease: number,
    cooldownIncreaseCap: number,
    skipCost: number,
    skipCostIncrease: number,
    skipCostIncreaseCap: number,
    wallBonus: number,
    gateBonus: number,
    moatBonus: number,
    unitWallCount: number,
    unitCapacity: number,
    addShogunPoint: number,
    addSamuraiMedal: number,
    lootc1: number
}

export interface DecoThreshold {
    decoLevelID: number;
    eventID: number;
    decoWodID: number;
    MinPoints: number;
}

export interface DistrictType {
    districtTypeID: number;
    district: string;
}

export interface Dungeon {
    countVictories: number;
    kID: number;
    lordID?: number;
    unitsM?: string;
    unitsL?: string;
    unitsR?: string;
    toolL?: string;
    toolM?: string;
    toolR?: string;
    unitsK?: string;
    skipCosts?: number;
}

export interface EffectCap {
    capID: number;
    maxTotalBonus?: number;
}

export interface Effect {
    effectID: number;
    name: string;
    effectTypeID: number;
    capID: number;
    sortOrder?: string;
    spaceIDs?: number | string;
    areaTypeID?: number | string;
    playerRelation?: string;
    isPvPFight?: number;
    isPvEFight?: number;
}

export interface EffectType {
    effectTypeID: number;
    name: string;
    combatType?: number;
}

export interface EmptyArea {
    emptyAreaID: number;
    kID: number;
    isBattleground: number;
    areaType: number;
    peasants?: number;
    unitWallCount: number;
    startingFood?: number;
    defStrength?: number;
    defenceUnits?: string;
    defenceTools?: string;
    dungeonPToolStacks?: string;
    dungeonNPToolStacks?: string;
    dungeonPTools?: number;
    dungeonNPTools?: number;
    wallWodId?: number;
    gateWodId?: number;
    keepWodId?: number;
    lordID?: number;
    guards?: number;
}

export interface Equipment {
    equipmentID: number;
    comment1?: string;
    comment2?: string;
    setID?: number;
    wearerID: number;
    slotID: number;
    effects?: string;
    mightValue?: number;
    rarenessID?: number;
    picID?: number;
    starRarity?: number;
    starLevel?: number;
    reuseAssetOfEquipmentID?: number;
    duration?: number;
    canSlotGem?: number;
    skinID?: number;
    sellPriceOverride?: number;
}

export interface EquipmentDrop {
    dropID: number;
    name: string;
    dropChance: number;
    levelFactor: number;
    minLevel: number;
    maxLevel: number;
    kID: string | number;
    areaTypeID: string | number;
    rarenessID?: number;
    magicFindStrength: number;
    gemLevelID?: number;
}

export interface EquipmentEffect {
    equipmentEffectID: number;
    effectID: number;
    dropRate?: number;
    wearerID: number;
    itemGroupID?: number | string;
    bonus?: number;
    name?: number | string;
    enchantmentPrimaryBonus?: number;
    enchantmentSecondaryBonus?: number;
    areaTypeID?: number | string;
    excludedMali?: number | string;
    ignoreCap?: number;
}

export interface EquipmentEffectStrength {
    strengthID: number;
    dropRate?: number;
    primary?: number;
    rarenessID?: number;
    bonus?: number;
    singleBonus?: number;
}

export interface EquipmentGemEffect {
    effectID: number;
    name: string;
    effectTypeID: number;
    areaTypeID?: string;
}

export interface EquipmentGroup {
    itemGroupID: number;
    name: string;
    wearerID: number;
    slotID: number;
    picID: number;
    dropRate: number;
}

export interface EquipmentRareness {
    rarenessID: number;
    name: string;
    secondaryAttributes?: number;
    saleValue?: number;
    mightValue?: number;
    slotIDs?: number | string;
    color: string;
    isHero?: number;
}

export interface EquipmentSet {
    ID: number;
    comment1?: string;
    comment2?: string;
    setID: number;
    neededItems: number;
    effects: string;
}

export interface EquipmentSlot {
    slotID: number;
    dropRate?: number;
    name: string;
    bonus: number;
    appearanceCount: number;
}

export interface EquipmentWearer {
    wearerID: number;
    dropRate: number;
    name: string;
}

export interface EventAutoScalingCamp {
    eventAutoScalingCampID: number;
    eventID: number;
    difficultyID: number;
    areaType: number;
    maxTroopCapacityDefense?: number;
    randomFactorDefense?: number;
    normalDiffDefStrengthBoostMinDefense?: number;
    normalDiffDefStrengthBoostMaxDefense?: number;
    premiumDiffDefStrengthBoostMinDefense?: number;
    premiumDiffDefStrengthBoostMaxDefense?: number;
    camplevel: number;
    lootFood?: number;
    lootWood?: number;
    lootStone?: number;
    lootIron?: number;
    lootCoal?: number;
    lootOil?: number;
    lootGlass?: number;
    lootC1?: number;
    lootMead?: number;
    lootHoney?: number;
    countVictory?: number;
    coolDown?: number;
    skipCosts?: number;
    addSamuraiToken?: number;
    samuraiTokenDiff?: number;
    saveSettingForNumberOfAttacks?: number;
    rank?: number;
    shogunPointsNeededForLevelUp?: number;
    cooldownIncrease?: number;
    cooldownIncreaseCap?: number;
    skipCostIncrease?: number;
    skipCostIncreaseCap?: number;
    addShogunPoint?: number;
    addSamuraiMedal?: number;
    maxTroopCapacityAttack?: number;
    randomFactorAttack?: number;
    normalDiffDefStrengthBoostMinAttack?: number;
    normalDiffDefStrengthBoostMaxAttack?: number;
    generateAttacks?: number;
    unitCapacity?: number;
    attackWaveAmount?: number;
    attackWaveAmountMin?: number;
    attackWaveAmountMax?: number;
    flankToolsPerWave?: number;
    flankToolsPerWaveMin?: number;
    flankToolsPerWaveMax?: number;
    frontToolsPerWave?: number;
    frontToolsPerWaveMin?: number;
    frontToolsPerWaveMax?: number;
    addKhanTablet?: number;
    khanTabletDiff?: number;
    baseLevel?: number;
    rageNeededForLevelUp?: number;
    playerRageCap?: number;
    increaseMultiplier?: number;
    increaseInterval?: number;
    generatedRagePerAttack?: number;
    chanceForCriticalRageGeneration?: number;
    generatedRagePerDefense?: number;
}

export interface EventAutoScalingCI {
    eventAutoScalingCiID: number;
    eventID: number;
    useableConstructionItemGroupIDs: number;
}

export interface EventAutoScalingDifficulty {
    difficultyID: number;
    eventID: number;
    difficultyTypeID: number;
    isLocked?: number;
    rentC2Cost?: number;
}

export interface EventAutoScalingDifficultyType {
    difficultyTypeID: number;
    name: string;
    sortOrder: number;
}

export interface EventAutoScalingHoLSkill {
    eventAutoScalingLegendID: number;
    eventID: number;
    playerLegendSkillEffect: string;
    mappingLegendSkillEffect: string;
}

export interface EventAutoScalingLordEffect {
    eventAutoScalingLordEffectID: number;
    eventID: number;
    difficultyID: number;
    effectName: string;
    effectGroup: string;
    wearerID: number;
    effectID: number;
    minValue: number;
    maxValue: number;
}

export interface EventAutoScaling {
    eventAutoScalingID: number;
    eventID: number;
    difficultyID: number;
    wallReductionBoost: number;
    gateReductionBoost: number;
    moatReductionBoost: number;
    guardsReductionBoost: number;
    npcDefenseScoreMultiplier: number;
    defaultDefenseUnits: string;
    toolPlayerLevel: number;
    defaultWallDefenseTools?: number;
    defaultGateDefenseTools?: number;
    defaultMoatDefenseTools?: number;
    defaultRangeDefenseTools: number;
    defaultMeleeDefenseTools: number;
    wavesPerTool: number;
    minDefStrength: number;
    defaultAttackUnits?: string;
    defaultRangeAttackTools?: number;
    defaultMeleeAttackTools?: number;
    defaultWallAttackTools?: number;
    defaultGateAttackTools?: number;
    defaultMoatAttackTools?: number;
}

export interface EventAutoScalingPairing {
    toolPairID?: number;
    eventID: number;
    minDifficultyID: number;
    maxDifficultyID: number;
    playerWodID: number;
    mappingWodID: number;
    unitPairID?: number;
}

export interface Event {
    eventID: number;
    comment1?: string;
    comment2?: string;
    kIDs?: string | number;
    partPayPriceID?: number;
    eventType?: string;
    hubType?: string;
    eventDuration?: string;
    minLevel?: number;
    maxLevel?: number;
    leaguetypeEventsIDs?: string;
    mapID?: string;
    packageIDs?: number | string;
    resourceTravelTaxRate?: number;
    unitTravelTaxRate?: number;
    rewardIDs?: number | string;
    eventExtensionUnlock?: number;
    areaTypes?: number | string;
    merchantID?: number;
    bloodpointBoosterPackageID?: number;
    costFactorStone?: number;
    costFactorFood?: number;
    costFactorC2?: number;
    targetSkipCostC2?: number;
    averageDungeonLevel?: number;
    skinID?: number;
    famePerDay?: string;
    winnerRewardIDs?: string;
    topXRewardIDs?: string;
    boobyRewardIDs?: string;
    prizeDeco?: number;
    hasSubtypes?: number;
    openWithLogin?: number;
    IsoChangeType?: number;
    invisible?: number;
    useMinLevelOfEvents?: number;
}

export interface EventSkin {
    eventSkinID: number;
    kIDs: number;
    eventType: string;
    hasIsoSkin: number;
    hasWorldMapSkin: number;
    minLevel: number;
}

export interface Expansion {
    wodID?: number;
    group?: string;
    name?: string;
    shopCategory?: string;
    type?: string;
    kIDs?: string | number;
    mapIDs?: string;
    expansionID?: number;
    spaceIDs?: string | number;
    expansionLevel?: number;
    costWood?: number;
    costStone?: number;
    costC2?: number;
    costLegendaryToken?: number;
    costLegendaryMaterial?: number;
    sceatSkillLocked?: number;
    effectLocked?: number;
}

export interface ExternalServerSkin {
    skinID: number;
    skin: string;
}

export interface Feast {
    feastID: number;
    productionBoost: number;
    duration: number;
    costFood?: number;
    minLevel: number;
    maxLevel: number;
    type: string;
    sortOrder: number;
    costC2?: number;
}

export interface ForgeMinuteSkip {
    id: number;
    forgeID: number;
    currencyID: number;
}

export interface FortuneTellerClass {
    fortuneTellerClassID: number;
    c2Cost: number;
    rewardIDs: string;
    toprewardID: number;
}

export interface FusionCostSequence {
    id: number;
    forgeID: number;
    fusionTargetLevelIterationIndex: number;
    costJSONKey: string;
    costAmount: number;
}

export interface FusionForge {
    forgeID: number;
    dustCurrencyID: number;
    usableMinuteSkipsPerDay: number;
}

export interface FusionShop {
    id: number;
    packageIDs: string;
}

export interface FusionSystem {
    id: number;
    minLevel: number;
    fusionCurrencyID: number;
    energyRechargeIntervalInSeconds: number;
    assembleCatalystEnergyCost: number;
    disassembleCatalystEnergyCost: number;
    baseBonusFusionXPChance: number;
    premiumBonusFusionXPChance: number;
    skipRechargeHardCurrencyCost: number;
    skipRechargeHardCurrencyCostFactor: number;
}

export interface GemColor {
    gemColorID: number;
    colorCode: string;
}

export interface GemLevel {
    gemLevelID: number;
    saleValue: number;
    insertCostC1: number;
    removalCostC2: number;
    craftSuccessChance?: number;
    craftCostC1?: number;
    craftCostC2?: number;
}

export interface Gem {
    gemID: number;
    comment1: string;
    comment2?: string;
    gemLevelID: number;
    wearerID: number;
    droppable: number;
    setID?: number;
    triggerChance: number;
    effects: string;
    starRarity?: number;
    starLevel?: number;
    reuseAssetOfGemID?: number;
    gemColorID?: number;
    followingGemID?: number;
    sellPriceOverride?: number;
}

export interface GeneralAbility {
    abilityID: number;
    name: string;
    abilityGroupID: number;
    level: number;
    abilityTriggerID: number;
    triggerPerWave?: number;
    abilityAttackEffectID: number;
    abilityDefenseEffectID: number;
}

export interface GeneralAbilityEffect {
    abilityEffectID: number;
    effects: string;
    priority: number;
}

export interface GeneralAbilityTrigger {
    abilityTriggerID: number;
    name: string;
}

export interface GeneralRarity {
    generalRarityID: number;
    maxStarLevel: number;
    unlockCosts: number;
    upgradeCosts: string;
    xpRequirements: string;
    universalShardsPerHundred: number;
    name: string;
}

export interface General {
    generalID: number;
    generalName: string;
    attackSlots?: string;
    defenseSlots?: string;
    generalRarityID: number;
    maxLevel: number;
    maxStarLevel: number;
    unlockCurrencyID?: number;
    upgradeCurrencyIDs?: string;
    isPreview: number;
    isNPCGeneral: number;
}

export interface GeneralSkill {
    skillID: number;
    name: string;
    generalID: number;
    skillGroupID: number;
    followingSkillID?: number;
    level: number;
    effects: string;
    totalCostSkillPoints: number;
    costSkillPoints: number;
    tier: number;
}

export interface GeneralSkillTier {
    tierID: number;
    generalID: number;
    tier: number;
    previousTierRequiredSkillPoints: number;
}

export interface GeneralSkipFinishQuest {
    generalSkipFinishQuestID: number;
    questsToFinish: string;
    minLevel: number;
    maxLevel?: number;
}

export interface GeneralSlot {
    slotID: number;
    abilityGroupIDs: number | string;
}

export interface GeneralsReSpecPackage {
    packageIDs: number;
}

export interface GeneralXPItem {
    currencyID: number;
    xpAmount: number;
}

export interface GlobalEffect {
    ID: number;
    globalEffectID: number;
    name: string;
    effects: string;
    boostValue: number;
    minLevel: number;
    maxLevel: number;
    displayKingdomIDs: string | number;
    displayEventIDs?: number | string;
    refreshArea?: number;
    effectValueKeys?: number | string;
}

export interface HighscoreBonus {
    leaguetypeID: number;
    highestRank: number;
    lowestRank?: number;
    unitReward?: string;
    minAmount: number;
    toolReward?: number;
    toolOffset?: number;
    toolMinAmount?: number;
    c1Reward?: number;
}

export interface Horse {
    wodID: number;
    group: string;
    name: string;
    type: number;
    unitBoost: number;
    marketBoost: number;
    spyBoost: number;
    costFactorC1: number;
    costFactorC2: number;
    isInstantSpyHorse?: number;
    isPegasusHorse?: number;
    comment2?: string;
    comment1?: string;
}

export interface InviteRewardStep {
    inviteRewardstepID: number;
    relatedOfferID: number;
    requiredFriendLevel: number;
    countFriends: number;
    rewardID: number;
}

export interface IslandPlayerReward {
    islandPlayerRewardID: number;
    cargoPointRequirement: number;
    rewardIDs: number;
    islandRewardSetID: number;
}

export interface IslandPreBuiltCastle {
    preBuiltCastleID: number,
    startPlayerLevel: number,
    startResourceID: number,
    costC2: number
}

export interface IslandRewardRank {
    islandRewardRankID: number;
    cargoPointRequirement?: number;
    rewardIDs: number | string;
    islandRewardSetID: number;
    topXValue?: number;
}

export interface Isle {
    IsleID: number;
    type: string;
    maxCountVictories: number;
    countVictories: string;
    dungeonlevel: number;
    guards: number;
    wallBonus: number;
    gateBonus: number;
    moatBonus: number;
    wallLevel?: number;
    gateLevel?: number;
    moatLevel?: number;
    towerLevel?: number;
    fixedLootWood?: number;
    globalCooldown: number;
    occupationTime?: number;
    fixedLootStone?: number;
    lootCargoPoints?: number;
    maxDiffLootCargoPoints?: number;
    fixedLootAquamarine?: number;
    lootWood?: number;
    lootStone?: number;
    lootFood?: number;
    maxDiffLootResources?: number;
    lootAquamarine?: number;
    maxDiffLootAquamarine?: number;
    localCooldown?: number;
}

export interface ISOObject {
    wodID: number;
    group: string;
    name: string;
    type: string;
    rotateType: number;
}

export interface ISOResource {
    wodID: number;
    group: string;
    name: string;
    type: string;
    resourceType?: string;
    gridOffsetX?: number;
    gridOffsetY?: number;
}

export interface Kingdom {
    kID: number;
    kingdomName: string;
    unitTravelTime: number;
    resourceTravelTime: number;
    unitTravelTaxRate: number;
    resourceTravelTaxRate?: number;
    minLevel: number;
    skipUnitTravelC2Cost: number;
    skipResourceTravelC2Cost: number;
    noobProtectionTime: number;
    requiredKingdomID: number;
    villageCapWood: number;
    villageCapStone: number;
    villageCapFood: number;
    villageCapCoal?: number;
    villageCapOil?: number;
    villageCapGlass?: number;
    villageCapIron?: number;
    npcCooldownFactor: number;
    partPayPriceID?: number;
    minC2Level?: number;
    premiumUnlockDiscount?: number;
}

export interface KingsMarket {
    id: number;
    content: string;
    packageIDs: string;
}

export interface Landmark {
    landmarkID: number;
    emptyMinConquerLevel: number;
    minDefenseLevel: number;
    defaultLevel: number;
    isDefault?: number;
    preBuiltCastleID?: number;
}

export interface LeagueTypeEvent {
    leaguetypeEventsID: number;
    eventID: number;
    leaguetypeID: number;
    rewardSetID: number;
    ressourceFactors?: string;
    resourceFactors?: string;
    neededPointsForRewards: string;
    rewardIDs: string;
    topXValue?: number | string;
    subType?: number;
    hardModeStart?: number;
    allianceRewardThresholdPoints?: number;
    difficultyIDforMaxPoints?: string;
    difficultyMaxPoints?: string;
    difficultyScalingNeededPointsForRewards?: string;
    difficultyScalingRewardIDs?: string;
}

export interface LeagueType {
    comment2?: string;
    leaguetypeID: number;
    eventID: number;
    minLevel: number;
    maxLevel: number;
    countVictoryMin?: number;
    countVictoryMax?: number;
    subType?: number;
    comment1?: string;
}

export interface LeagueTypeTopXSize {
    Comment: string;
    zoneID: number;
    eventID: number;
    leaguetypeID: number;
    topXValue: string;
}

export interface LegendSkill {
    skillID: number;
    followingSkillID?: number;
    level: number;
    skillTreeID: number;
    tier: number;
    skillGroupID: number;
    totalCostSkillPoints?: number;
    costSkillPoints?: number;
    effectType: string;
    totalEffectValue: number;
    effectValue: number;
    requiredSkillID?: number;
    specialType?: string;
}

export interface LegendSkillThreshold {
    tierID: number;
    unlockThreshold: number;
}

export interface LevelBooster {
    boosterID: number;
    boosterType: number;
    level: number;
    costC2: number;
    boostPercentage: number;
}

export interface LevelBracket {
    bracketID: number;
    maxLevel?: number;
    minLevel?: number;
}

export interface LevelUpPrice {
    levelUpPriceID: number;
    fromLevel: number;
    toLevel: number;
    c2Cost: number;
}

export interface LevelUp {
    minLevel: number;
    maxLevel: number;
    rewardID: number;
    isLegend?: number;
}

export interface LongTermPointEventQuest {
    pointEventQuestID: number;
    leaguetypeID: number;
    pointsPerTier: string;
    subEventID: number;
    conditions: string;
}

export interface LootBox {
    lootBoxID: number;
    lootBoxTypeID: number;
    name: string;
    rarity: number;
    lootBoxTombolaID: number;
    draws: number;
    lootBoxKeyTombolaID: number;
    sortOrder: number;
}

export interface LootBoxKeyTombola {
    entryID: number;
    tombolaID: number;
    addRareMysteryBoxKey?: number;
    shares: number;
    addEpicMysteryBoxKey?: number;
    addLegendaryMysteryBoxKey?: number;
}

export interface LootBoxTombola {
    entryID: number;
    tombolaID: number;
    rewardCategory: number;
    rewardIDs: number | string;
    shares: number;
}

export interface LootBoxType {
    lootBoxTypeID: number;
    lootBoxTheme: string;
    lootBoxKeyPayoutThreshold: number;
}

export interface Lord {
    lordID: number;
    type: string;
    wearerID: number;
    effects?: string;
    minLevel?: number;
    maxLevel?: number;
    shownLevel?: number;
    generalID?: number;
}

export interface LuckyWheelClass {
    luckyWheelClassID: number;
    neededSpinsForNextClass?: number;
    C2PerSkippedSpin?: number;
    HighlightNormal: string;
    HighlightHard: string;
    activityRewardThreshold?: number;
    TopHighlightNormal?: string;
    TopHighlightHard?: string;
}

export interface LuckyWheelDropChanceHardJackpot extends LuckyWheelDropChanceJackpot {
}

export interface LuckyWheelDropChanceJackpot {
    luckyWheelJackpotDropID: number;
    rewardIDs: number;
    Class1Chance: number;
    Class2Chance: number;
    Class3Chance: number;
    Class4Chance: number;
    Class5Chance: number;
    Class6Chance: number;
    Class7Chance: number;
    Class8Chance: number;
    Class9Chance: number;
}

export interface LuckyWheelDropChance {
    luckyWheelDropID: number;
    rewardIDs?: number;
    NormalDrop: number;
    HardDrop: number;
    isJackpot?: number;
}

export interface LuckyWheelRewardSet {
    luckyWheelRewardSetID: number;
    rewardIDs: string;
}

export interface MainQuest {
    mainQuestID: number;
    IDsForRunning: number;
    IDsForDone?: number;
    IDsForAnnounced?: number;
}

export interface Merchant {
    id: number;
    packageCategories?: string;
    name: string;
}

export interface MightRank {
    mightID: number;
    threshold: number;
    rewardID: number;
}

export interface MineType {
    mineTypeID: number;
    amountLootable?: number;
    waitingTime: number;
    amountPerCollectC2?: number;
    amountPerCollectC1?: number;
    amountInfluencePerMinute?: number;
    maxInfluencePoints?: number;
    reductionDisplay?: number;
}

export interface Monument {
    level: number;
    fameBoost: number;
    requiredPoints: number;
}

export interface Movement {
    wodID: number,
    group: string,
    name: string,
    type: string
}

export interface NewsletterReward {
    newsLetterID: number;
    rewardID: number;
}

export interface NomadCamp extends Camp {
    addKhanTablet: number;
    khanTabletDiff: number;
}

export interface OfficersSchoolCurrency {
    id: number;
    currency: string;
}

export interface OfficersSchoolDuration {
    id: number;
    duration: number;
    unlockBuildingWodID: number;
}

export interface OfficersSchoolEffect {
    id: number,
    effectID: number,
    eventID: number,
    shares: number,
    minimumEffectValueSlot1: number,
    maximumEffectValueSlot1: number,
    minimumEffectValueSlot2: number,
    maximumEffectValueSlot2: number,
    minimumEffectValueSlot3: number,
    maximumEffectValueSlot3: number,
    unlockBuildingWodID: number,
    c1Cost: number,
    c2Cost: number,
    costKhanTablet: number,
    costKhanMedal: number,
    costSamuraiToken: number
}

export interface OfficersSchoolPowerDistribution {
    id: number;
    shares: number;
}

export interface OfficersSchoolUnitPair {
    id: number;
    wodID: string;
    shares: number;
    unlockBuildingWodID: number;
}

export interface PackageCategory {
    categoryID: number;
    name: string;
    sortOrder: number;
}

export interface PackageCategoryCurrencyRelation {
    id: number;
    categoryID: number;
    currencyID: number;
}

export interface PackageCategoryFilterRelation {
    relationID: number;
    categoryID: number;
    filterID?: number;
    subFilterID?: number;
}

export interface PackageFilter {
    filterID: number;
    name: string;
}

export interface Package {
    packageID: number;
    packageType: string;
    comment1?: string;
    comment2?: string;
    sortOrder?: number;
    relationIDs: number | string;
    costPearlRelic?: number;
    amountC1?: number;
    buildingID?: number;
    buildingAmount?: number;
    validKingdoms?: string | number;
    unitID?: number;
    unitAmount?: number;
    equipmentIDs?: number | string;
    stock?: number;
    maxLevel?: number;
    minLevel?: number;
    notRebuyable?: number;
    constructionItemID?: number;
    constructionItemAmount?: number;
    add30MinSkip?: number;
    add60MinSkip?: number;
    addSilverToken?: number;
    addResourceVillageToken?: number;
    packagePriceC2?: number;
    bestseller?: number;
    costKhanTablet?: number;
    costKhanMedal?: number;
    gemIDs?: number;
    gemAmount?: number;
    equipmentAmount?: number;
    addCommonFinesand?: number;
    addRareFarmingtools?: number;
    rewardBags?: number | string;
    addEpicResin?: number;
    addLegendarySoulstone?: number;
    costSamuraiToken?: number;
    maxBuyPerClick?: number;
    addCommonBricks?: number;
    addRareFlint?: number;
    packagePriceWood?: number;
    packagePriceStone?: number;
    isGiftPackage?: number;
    addSaleDaysLuckyWheelTicket?: number;
    packagePriceC1?: number;
    addCommonPurifiedwater?: number;
    addCommonClay?: number;
    addRarePaint?: number;
    addRareRope?: number;
    addEpicPreciousmetals?: number;
    addLegendaryMagmastone?: number;
    addHeritageBoosterKey?: number;
    addTonicBooster?: number;
    addTonic?: number;
    addInfluenceBooster?: number;
    addLegendaryMaterial?: number;
    addLegendaryToken?: number;
    addStatuetteBooster?: number;
    amountWood?: number;
    amountStone?: number;
    amountFood?: number;
    c2LifetimeSpentMax?: number;
    c2LifetimeSpentMin?: number;
    amountCoal?: number;
    amountOil?: number;
    amountGlass?: number;
    amountIron?: number;
    maxLegendLevel?: number;
    minLegendLevel?: number;
    amountHoney?: number;
    amountMead?: number;
    fillUpResourceStorage?: number;
    excludedAreaTypes?: string;
    isBannerPackage?: number;
    fillAllStorages?: number;
    ignoreResourceStorageCapacity?: number;
    addLuckyWheelTicket?: number;
    equipmentDropChance?: string;
    equipmentDungeonLevel?: number;
    specialEquipmentOfRarenessID?: number;
    gemDropChance?: string;
    specialGemOfLevelID?: number;
    specialHeroOfRarenessID?: number;
    heroAmount?: number;
    heroDropChance?: string;
    isThemePackage?: number;
    packageIDs?: string;
    enchantedEquipmentIDs?: string;
    relicEquipments?: string;
    costShapeShifterCharm?: number;
    costShapeShifterInsignia?: number;
    addShapeShifterCharmBoosterKey?: number;
    addShapeShifterBloodpointBoosterKey?: number;
    addSoulSuckerBoosterKey?: number;
    addFurSkinnerBoosterKey?: number;
    addBeadBowlBoosterKey?: number;
    addBusyBeesBoosterKey?: number;
    addEssenceBoosterKey?: number;
    addBalloonsBoosterKey?: number;
    addTeaTimeBoosterKey?: number;
    costGoldToken?: number;
    costSilverToken?: number;
    addFusionCurrency?: number;
    addDecoDust?: number;
    addDecoCatalyst5?: number;
    addDecoCatalyst6?: number;
    addDecoCatalyst7?: number;
    addDecoCatalyst8?: number;
    addDecoCatalyst9?: number;
    addDecoCatalyst10?: number;
    addDecoCatalyst11?: number;
    addDecoCatalyst12?: number;
    addDecoCatalyst13?: number;
    addDecoCatalyst14?: number;
    addDecoCatalyst15?: number;
    addDecoCatalyst16?: number;
    addDecoCatalyst17?: number;
    addDecoCatalyst18?: number;
    addDecoCatalyst19?: number;
    addDecoCatalyst20?: number;
    vipPoints?: number;
    vipTime?: number;
    addPegasusTicket?: number;
    add5HourSkip?: number;
    add24HourSkip?: number;
    addGoldToken?: number;
    addSamuraiMedalBoosterKey?: number;
    hideInShop?: number;
    addShogunPointBoosterKey?: number;
    costSamuraiMedal?: number;
    addDecoCatalyst21?: number;
    addDecoCatalyst22?: number;
    addDecoCatalyst23?: number;
    addDecoCatalyst24?: number;
    addDecoCatalyst25?: number;
    addDecoCatalyst26?: number;
    addDecoCatalyst27?: number;
    addDecoCatalyst28?: number;
    addDecoCatalyst29?: number;
    addDecoCatalyst30?: number;
    costFusionCurrency?: number;
    costDecoDust?: number;
    packagePriceAquamarine?: number;
    amountXP?: number;
    addSceatToken?: number;
    packagePriceCoal?: number;
    packagePriceOil?: number;
    packagePriceGlass?: number;
    costWishingWellCoin?: number;
    hiddenFood?: number;
    addCastlePassageToken?: number;
    hiddenMead?: number;
    costAnniversaryToken?: number;
    costXmasLTPEToken?: number;
    addDecoCatalyst35?: number;
    addDecoCatalyst40?: number;
    addDecoCatalyst45?: number;
    addDecoCatalyst50?: number;
    addDecoCatalyst55?: number;
    addDecoCatalyst60?: number;
    addDecoCatalyst65?: number;
    addDecoCatalyst70?: number;
    addKhanTablet?: number;
    costSpringLTPEToken?: number;
    costNewKingLTPEToken?: number;
    costLotusFlowerLTPEToken?: number;
    lootBox?: string;
    costOctoberfestLTPEToken?: number;
    addFatKingToken?: number;
    addKnightToken?: number;
    addPrincessToken?: number;
    addGeneralsSkillsResetToken?: number;
    costHalloweenLTPEToken?: number;
    costIceLTPEToken?: number;
    costStPatrickLTPEToken?: number;
}

export interface PackageSubFilter {
    subFilterID: number;
    name: string;
}

export interface PartPayPrice {
    partPayPriceID: number;
    comment1: string;
    comment2?: string;
    wood: number;
    stone: number;
    food: number;
    currency1: number;
    currency2: number;
    premiumUnlockCurrency2?: number;
    mode: string;
    skippable?: number;
}

export interface PaymentReward {
    paymentrewardID: number;
    minLevel?: number;
    maxLevel?: number;
    c2LifetimeSpentMin?: number;
    playerIsPayuser?: number;
    c2ForReward: number;
    shownCurrencyValue: number | string;
    rewardCap?: number;
    shownOfferBonus: number;
    daysSinceLastPaymentMin?: number;
    daysSinceLastPaymentMax?: number;
    duration?: number;
    skinID?: number;
    rewards: string;
    displayType?: number;
    abGroupIDs?: number;
    abGoupCount?: number;
}

export interface PlayerNameChange {
    nameChangeID: number;
    costC2: number;
}

export interface PointEventQuest {
    pointEventQuestID: number;
    leaguetypeID: number;
    pointsPerTier: string | number;
    neededPointsForReward1?: number;
    neededPointsForReward2?: number;
    neededPointsForReward3?: number;
    topXValue?: number;
    conditions: string;
    incremental?: number;
    hasInvisibleRanking?: number;
    kID?: number;
}

export interface PointEventRewardSet {
    id: number;
    leaguetypeID: number;
    rewardSetID: number;
    rewardIDs: string;
}

export interface PointEventType {
    pointEventTypeID: number;
    pointEventQuestIDs: number | string;
}

export interface PreBuiltCastle {
    preBuiltCastleID: number;
    comment1: string;
    comment2: string;
    spaceIDs: string | number;
    minLevel: number;
    costWood?: number;
    costStone?: number;
    unitCapacity?: number;
    auxiliaryCapacity?: number;
    costC2?: number;
    costFood?: number;
    costC1?: number;
    shownDiscount?: number;
    isMainCastleCopy?: number;
}

export interface PrimeDay {
    primeDayID: number;
    minLevel: number;
    maxLevel: number;
    c2LifetimeSpentMin?: number;
    playerIsPayuser: number;
    rewardCap: number;
    skinID?: number;
    paymentRewardIDs: number | string;
    daysSinceLastPaymentMin?: number;
    daysSinceLastPaymentMax?: number;
    c2LifetimeSpentMax?: number;
    C290daysMin?: number;
    C290daysMax?: number;
    abGroupIDs?: number;
    abGoupCount?: number;
    currentC2StockMin?: number;
    currentC2StockMax?: number;
    paymentsLast14DaysMin?: number;
    paymentsLast14DaysMax?: number;
}

export interface PrivateVillage {
    villageID: number;
    type: string;
    villageLevel: number;
    kID: number;
    costResourceVillageToken: number;
    effects: string;
}

export interface Property {
    propertyID: number;
    value: number;
    name: string;
    clientOnly?: number;
}

export interface Quest {
    questID: number;
    comment1?: string;
    comment2?: string;
    questbookTabID: number;
    questSeriesID?: number;
    questSeriesNumber?: number;
    numberOfQuestsInSeries?: number;
    requiredLevel?: number;
    questGiverID?: number;
    conditions: string;
    killQuestIDs?: number | string;
    hidden?: number;
    shownKingdomID?: number;
    triggerKingdomID?: number;
    requiredLegendLevel?: number;
    requiredQuestID?: number | string;
    sortPriority?: number;
    xp?: number;
    units?: string;
    hiddenFood?: number;
    ignoreResourceStorageCapacity?: number;
    maxLevel?: number;
    wood?: number;
    stone?: number;
    currency1?: number;
    food?: number;
    recommended?: number;
    equipmentIDs?: number;
    killQuestIDsOnStart?: number | string;
    currency2?: number;
    hiddenTempServer?: number;
    genericQuestID?: number;
    constructionItemIDs?: number;
    maxRepeatCount?: number;
    maxQuest?: number;
    coal?: number;
    oil?: number;
    glass?: number;
    iron?: number;
    equipmentRarenessID?: number;
    addRelicFragment?: number;
    hiddenBattleGround?: number;
    addFusionCurrency?: number;
    addDecoCatalyst4?: number;
    addDecoDust?: number;
    add10MinSkip?: number;
    add30MinSkip?: number;
    add60MinSkip?: number;
    maxLevelForXP?: number;
    groupID?: number;
    aquamarine?: number;
    eventID?: number;
    toHome?: number;
    mapID?: number;
    paymentDoppler?: number;
    isRelicQuest?: number;
    relicEquipments?: string;
    gemIDs?: number;
    decoWodID?: number;
    toDecoGlobalStorage?: number;
    c2Cost?: number;
    c2Reduction?: string;
    tier?: number;
    leaguetypeID?: number;
    gemLevelIDs?: number;
    rewardBags?: string;
    addLuckyWheelTicket?: number;
    addApprenticeToken?: number;
    onlyBattleGroundScoringID?: number;
}

export interface RandomGroup {
    randomGroupEntryID: number;
    groupType: string;
    probability: number;
    wodID: string;
}

export interface RelicBluePrint {
    id: number;
    relicTypeID: number;
    normalAmount: number;
    specialAmount: number;
    normalRelicEffectListID: number;
    baseRelicEffectIDs?: number | string;
    specialRelicEffectListID?: number;
}

export interface RelicCategory {
    id: number;
    neededRatings: string;
    neededMinimum: number;
}

export interface RelicEffectList {
    id: number;
    relicEffectIDs: string;
}

export interface RelicEffectPowerRating {
    id: number;
    threshold: number;
}

export interface RelicEffect {
    id: number;
    effectID: number;
    minimumValue: number;
    maximumValue: number;
    relicEffectType: string;
    valueTextType: string;
    effectValueKeys?: number | string;
}

export interface RelicEnchanter {
    level: number;
    relicNormalEffectBoost: number;
    chance: number;
    c1Cost: number;
    c2Cost: number;
    costRelicFragment: number;
}

export interface RelicLootOption {
    id: number;
    tombolaID: number;
    relicEquipments: string;
    shares: number;
}

export interface RelicPowerDistribution {
    power: number;
    shares: number;
}

export interface RelicType {
    id: number;
    wearerID: number;
    slotID?: number;
    name?: string;
    isGem?: number;
    canBeSlottedInSlotIDs?: string;
}

export interface ReRollCost {
    id: number;
    type: string;
    rerollCount: number;
    c1Cost: number;
    c2Cost: number;
    costKhanTablet: number;
    costKhanMedal: number;
    costSamuraiToken: number;
    costGoldToken: number;
    costSilverToken: number;
}

export interface Research {
    researchID: number;
    comment2: string;
    groupID: number;
    level: number;
    prerequisiteIDs?: number | string;
    researchTypeID?: number;
    x?: number;
    y?: number;
    tabID?: number;
    researchDuration: number;
    globalServerResearchDuration?: number;
    costWood?: number;
    globalServerCostWood?: number;
    costStone?: number;
    globalServerCostStone?: number;
    minResearchTowerLevel?: number;
    requiredBuildings?: string | number;
    effects?: string;
    costC2?: number;
    unwalkable?: number;
    costGlass?: number;
    costCoal?: number;
    costOil?: number;
    effectDisplay?: number;
    costIron?: number;
    comment1?: string;
    requiredLevel?: number;
    requiredLegendLevel?: number;
    costLegendaryToken?: number;
    costLegendaryMaterial?: number;
    costC1?: number;
    globalServerCostC1?: number;
    costHoney?: number;
    costMead?: number;
    categoryID?: number;
    minHallOfLegendsLevel?: number;
}

export interface RewardBag {
    bagID: number;
    rareness: number;
    focused?: number;
    focusedMaterialID?: number;
    size: number;
    addCommonFinesand?: number;
    variableCommonFinesand: number;
    percentagesCommonFinesand: string | number;
    variableCommonBricks: number;
    percentagesCommonBricks: string | number;
    variableRareFlint: number;
    percentagesRareFlint: string | number;
    variableRareFarmingtools: number;
    percentagesRareFarmingtools: string | number;
    variableEpicResin: number;
    percentagesEpicResin: string | number;
    variableLegendarySoulstone: number;
    percentagesLegendarySoulstone: string | number;
    addCommonBricks?: number;
    addRareFlint?: number;
    addRareFarmingtools?: number;
    addEpicResin?: number;
    addLegendarySoulstone?: number;
}

export interface Reward {
    rewardID: number;
    comment1?: number | string;
    comment2?: number | string;
    addRefinedLumber?: number;
    addRefinedStone?: number;
    addComponent1?: number;
    addComponent2?: number;
    addComponent3?: number;
    addComponent4?: number;
    addComponent5?: number;
    addComponent6?: number;
    addComponent7?: number;
    addComponent8?: number;
    addShardHoratio?: number;
    addShardAlyssa?: number;
    addShardLeo?: number;
    addShardToril?: number;
    addFatKingToken?: number;
    addGeneralsSkillsResetToken?: number;
    relicEquipments?: string;
    add24HourSkip?: number;
    currency2?: number;
    addGenXP500?: number;
    addGenXP1000?: number;
    addGenXP2500?: number;
    addGenXP5000?: number;
    addGenXP10000?: number;
    addPegasusTicket?: number;
    food?: number;
    ignoreResourceStorageCapacity?: number;
    constructionItemIDs?: number | string;
    units?: string;
    hiddenFood?: number;
    stone?: number;
    wood?: number;
    equipmentIDs?: number | string;
    decoWodID?: number;
    addKnightToken?: number;
    addPrincessToken?: number;
    addWishingWellCoin?: number;
    toDecoGlobalStorage?: number;
    currency1?: number;
    ignoreVipPointCap?: number;
    vipPoints?: number;
    vipTime?: number;
    equipmentRarenessID?: number;
    gemIDs?: number | string;
    add5HourSkip?: number;
    addLuckyWheelTicket?: number;
    add30MinSkip?: number;
    add60MinSkip?: number;
    addSilverToken?: number;
    addGoldToken?: number;
    addSceatToken?: number;
    addLegendaryToken?: number;
    addSaleDaysLuckyWheelTicket?: number;
    iron?: number;
    hiddenMead?: number;
    addLegendaryMaterial?: number;
    addCommonTimber?: number;
    addCommonStraw?: number;
    addRareNails?: number;
    addRareGlue?: number;
    lootBox?: string;
    addEpicCobblestone?: number;
    addLegendaryFabric?: number;
    grantType?: number;
    addSpiritDoubloon?: number;
    addBastionDoubloon?: number;
    addRampartDoubloon?: number;
    addVigorDoubloon?: number;
    add1MinSkip?: number;
    enchantedEquipmentIDs?: string;
    add5MinSkip?: number;
    add10MinSkip?: number;
    addShapeShifterCharm?: number;
    addShapeShifterInsignia?: number;
    giftPackageIDs?: string;
    ignoreGiftCapacity?: number;
    longTermPointEventBooster?: string;
    gemLevelIDs?: number;
    addKhanTablet?: number;
    rewardBags?: string;
    coal?: number;
    oil?: number;
    addDecoDust?: number;
    addFusionCurrency?: number;
    addDecoCatalyst1?: number;
    addDecoCatalyst2?: number;
    addDecoCatalyst3?: number;
    addDecoCatalyst4?: number;
    addDecoCatalyst5?: number;
    addDecoCatalyst6?: number;
    addDecoCatalyst7?: number;
    addDecoCatalyst8?: number;
    addDecoCatalyst9?: number;
    addApprenticeToken?: number;
    buildingWodID?: number | string;
    addAnniversaryToken?: number;
    addXmasLTPEToken?: number;
    addSpringLTPEToken?: number;
    addNewKingLTPEToken?: number;
    addLotusFlowerLTPEToken?: number;
    addOctoberfestLTPEToken?: number;
    addHalloweenLTPEToken?: number;
    addIceLTPEToken?: number;
    addStPatrickLTPEToken?: number;
    addDecoCatalyst10?: number;
    addDecoCatalyst11?: number;
    addDecoCatalyst12?: number;
    addKhanMedal?: number;
    addCastlePassageToken?: number;
    addDecoCatalyst13?: number;
    addDecoCatalyst14?: number;
    addDecoCatalyst15?: number;
    addDecoCatalyst16?: number;
    grantTitle?: number;
    addRareBoosterConsumable?: number;
    addEpicBoosterConsumable?: number;
    addLegendaryBoosterConsumable?: number;
    addDecoCatalyst18?: number;
    addDecoCatalyst17?: number;
    globalStorage?: number;
    addFuryDoubloon?: number;
    addTimeDoubloon?: number;
    ignoreMinuteSkipCapacity?: number;
    glass?: number;
    xp?: number;
}

export interface SaleDaysLuckyWheelClass {
    saleDaysLuckyWheelClassID: number;
    neededSpinsForNextClass?: number;
    HighlightNormal: string;
    activityRewardThreshold?: number;
}

export interface SaleDaysLuckyWheelDropChanceJackpot {
    saleDaysLuckyWheelJackpotDropID: number;
    rewardIDs: number;
    Class1Chance: number;
    Class2Chance: number;
    Class3Chance: number;
    Class4Chance: number;
    Class5Chance: number;
    Class6Chance: number;
    Class7Chance: number;
    Class8Chance: number;
    Class9Chance: number;
}

export interface SaleDaysDaysLuckyWheelDropChance {
    saleDaysWheelDropID: number;
    rewardIDs?: number;
    minLevel?: number;
    maxLegendLevel?: number;
    NormalDrop: number;
    minLegendLevel?: number;
    isJackpot?: number;
}

export interface SaleDaysLuckyWheelInitialCategorySelection {
    id: number;
    chance: number;
    category: string;
}

export interface SaleDaysLuckyWheelRewardSet {
    saleDaysLuckyWheelRewardSetID: number;
    rewardIDs: string;
}

export interface SamuraiCamp extends Camp {
    addSamuraiToken: number;
    samuraiTokenDiff: number;
}

export interface SceatSkill {
    skillID: number;
    skillGroupID: number;
    level: number;
    skillTreeID: number;
    tier: number;
    sortOrder: number;
    requiredBuildings: number | string;
    requiredLegendLevel: number;
    costSceatToken: number;
    activationTime: number;
    effects: string;
    requiredBuildingsCondition?: string;
    followingSkillID?: number;
    requiredSkillID?: number;
}

export interface SceatSkillTier {
    tierID: number;
    skillTreeID: number;
    tier: number;
    requiredBuildings?: number | string;
}

export interface SceatSkillTree {
    skillTreeID: number;
    tabID: number;
    keepDisplayLevel: number;
}

export interface SeasonEndReward {
    id: number;
    rewardSetID: number;
    minHighscoreRank: number;
    rewardIDs: number | string;
    leaguetypeID?: number;
}

export interface SeasonEventReward {
    id: number;
    rewardSetID: number;
    eventIDs: string | number;
    rankID: number;
    rewardIDs: string;
    needsSeasonPass?: number;
}

export interface SeasonMedal {
    medalID: number;
    type: string;
    minHighscoreRank: number;
    medalPoints: number;
}

export interface SeasonPromotionReward {
    id: number;
    rewardSetID: number;
    rankID: number;
    rewardIDs: string;
    needsSeasonPass?: number;
    leaguetypeID?: number;
}

export interface SeasonRank {
    rankID: number;
    minMedalPointsForUnlock: number;
    majorRank: number;
    minorRank: number;
}

export interface SeasonSetting {
    settingID: number;
    seasonPassPromotionPrice: number;
    seasonPassEventEndPrice: number;
    seasonPassFullDiscount: number;
    seasonPassSingleDiscount: number;
}

export interface Sector {
    wodID: number;
    group: string;
    name: string;
    type: string;
    rotateType?: number;
}

export interface ShapeShifterActivityReward {
    shapeshifterActivityRewardID: number;
    leaguetypeID: number;
    pointsMin: number;
    pointsMax?: number;
    rewardID: number;
}

export interface ShapeShifterHardcoreModeEffect {
    shapeshifterHardcoreModeEffectID: number;
    effects: string;
    pointBoostFactor: number;
}

export interface ShapeShifterPermittedEffect {
    shapeshifterPermittedEffectID: number;
    effectTypeID: number;
    attacker: number;
}

export interface ShapeShifterRankingReward {
    shapeshifterRankingRewardID: number;
    leaguetypeID: number;
    rankMin: number;
    rankMax?: number;
    rewardID: number;
}

export interface ShapeShifterTicket {
    ticketNumber: number;
    ticketPriceC2: number;
}

export interface ShoppingCart {
    cartOptionID: number;
    typeID: number;
    groupID: number;
    minLevel: number;
    maxLevel: number;
    shownOfferBonus: number;
    rewardID: number;
    c2LifetimeSpentMin?: number;
    c2LifetimeSpentMax?: number;
    C290daysMin?: number;
    C290daysMax?: number;
}

export interface Slums {
    slum: Slum[];
}

export interface Slum {
    slumLevel: number;
    kID: number;
    partPayPriceID?: number;
    packageIDs?: string;
}

export interface SpecialCamp {
    specialcampID: number;
    type: string;
    distance: number;
    lootWood: number;
    lootStone: number;
    lootFood: number;
    Woodboost?: number;
    Stoneboost?: number;
    Foodboost?: number;
    lootValueModifier?: number;
    dungeonlevel: number;
    dungeonPTools?: number;
    defStrength?: number;
    randomizedDefence?: number;
    unlockIDs?: number | string;
    countVictories?: number | string;
    lootc1?: number;
    lootc2?: number;
    CampPosX?: number;
    CampPosY?: number;
    attacksUntilDestroyed?: number;
    laneID?: number;
    villageCount?: number;
}

export interface StartResource {
    startResourceID: number;
    food: number;
    wood?: number;
    stone?: number;
    currency1?: number;
}

export interface SubscriptionLoyalty {
    subscriptionLoyaltyID: number;
    month: number;
    boost: number;
    subscriptionTypeID: number;
}

export interface SubscriptionsBuff {
    subscriptionBuffID: number;
    subscriptionTypeID: number;
    tier: number;
    effects: string;
    displayOrder: number;
    seriesID?: number;
    requiredMembers?: number;
}

export interface SubscriptionsReward {
    subscriptionsRewardID: number;
    subscriptionTypeID: number;
    rewardIDs: number;
}

export interface Surrounding {
    wodID: number;
    group: string;
    name: string;
    type: number | string;
    level: number;
    layerType: string;
    gridOrigin: string;
    gridOffsetX: number;
    gridOffsetY: number;
    width: number;
    height: number;
    maxLevel: number;
    kIDs?: number;
    requiredLevel?: number;
    mapIDs?: string;
}

export interface TempServerDailyTaskReward {
    tempServerDailyTaskRewardID: number;
    minDailyTaskPointsPerDay: number;
    rewardID: number;
}

export interface TempServerPreBuiltCastle {
    preBuiltCastleID: number;
    questsToFinish: string;
    startPlayerLevel: number;
    startResourceID: number;
    costC2?: number;
    startPlayerLegendLevel?: number;
    costCastlePassageToken?: number;
    castlePassageTokenPackageID?: number;
}

export interface TempServerRankPoint {
    tempServerRankID: number;
    eventID: number;
    minRank: number;
    maxRank: number;
    rankPoints: number;
}

export interface TempServerRankReward {
    tempServerRankRewardID: number;
    tempServerRankID: number;
    eventID: number;
    rank: number;
    rewardID: number;
    rewardSetID: number;
}

export interface TempServerSetting {
    settingID: number;
    presetIDs: number | string;
    peaceDuration: number;
    scoringSystem: string;
    hasDailyScoring: number;
    skinID: number;
    startCurrencyAmount: number;
    currencyLootFactorMin?: number;
    rewardSetID: number;
    currencyID?: number;
    boosterCurrencyID?: number;
    boosterCurrencyValue?: number;
    boosterCurrencyLimit?: number;
    currencyLootFactorMax?: number;
    boosterCurrencyPackageID?: number;
    minimumCurrencyAmountToScore?: number;
    lootValueModifier?: number;
    costTonic?: number;
    returnCurrencyFactor?: number;
}

export interface Title {
    titleID: number;
    type: string;
    threshold?: number;
    decay?: number;
    displayType: string;
    mightValue: number;
    previousTitleID?: number;
    rewardID?: number;
    effects?: string;
    topX?: number;
}

export interface TMapNode {
    tmapnodeID: number;
    dungeonType?: string;
    type: string;
    countVictories: number;
    lootc1?: number;
    lootWood?: number;
    lootStone?: number;
    addPearlRelic?: number;
    pos: number;
    distance: number;
    dungeonlevel: number;
    wallBonus?: number;
    gateBonus?: number;
    coolDown?: number;
    ownerID?: number;
    orUnlockIDs?: number | string;
    lootFood?: number;
    pearlRelicDiff?: number;
    randomizedDefence?: number;
    defStrength?: number;
    defenceUnits?: string;
    defenceTools?: string;
    unitWallCount?: number;
    columnOnMap?: number;
    villageSize?: number;
    dungeonPToolStacks?: string | number;
    dungeonNPToolStacks?: string;
    andUnlockIDs?: number;
    partPayPriceID?: number;
}

export interface TMap {
    mapID: number;
    comment1: string;
    comment2: string;
    tmapnodeIDs: string;
    requiredMapID: number;
    kID: number;
    totalpieces: number;
    initialpos: number;
    maptype: number;
    mapbackground: number;
    endNodeID: number;
    showEndNodeID: number;
    hasCamp: number;
    continueAfterBoss: number;
    travelTime: number;
    resourceTravelTaxRate: number;
    unitTravelTaxRate: number;
    skipCostC2: number;
    initialWood: number;
    initialStone: number;
    initialFood: number;
}

export interface ToolCategory {
    toolCategoryID: number;
    name: string;
}

export interface Townsfolk {
    wodID: number;
    group: string;
    name: string;
    type: string;
    walkable: number;
    maxWayPoints: number;
    speed: number;
    speedRandomPercent: number;
}

export interface Unit {
    wodID: number;
    comment2?: string;
    group: string;
    name: string;
    type: string;
    canBeUsedToAttackNPC?: number;
    canBeUsedByNPC?: number;
    typ?: string;
    slotTypes?: string;
    sortOrder?: number;
    comment1?: string;
    toolCategory?: number;
    buildingLevel?: number;
    speed?: number;
    recruitmentTime?: number;
    lowLevelRecruitmentTime?: string;
    costWood?: number;
    costStone?: number;
    cleavageOfCellsCost?: number | string;
    attackscreenBuyable?: number;
    gateBonus?: number;
    fightType?: number;
    allowedForNpcAttackInKingdom?: string | number;
    costC2?: number;
    tempServerCostC2?: number;
    inventoryType?: number;
    eventIDs?: string | number;
    khanTabletBooster?: number;
    allowedToAttack?: string;
    allowedToTravel?: string;
    deleteToolAfterBattle?: number;
    pointBonus?: number;
    fameBonus?: number;
    samuraiTokenBooster?: number;
    wallBonus?: number;
    pearlBooster?: number;
    kIDs?: string | number;
    moatBonus?: number;
    defRangeBonus?: number;
    offMeleeBonus?: number;
    offRangeBonus?: number;
    costC1?: number;
    lootValue?: number;
    xpBonus?: number;
    amountPerWave?: number;
    ragePointBonus?: number;
    khanMedalBooster?: number;
    defMeleeBonus?: number;
    c1Bonus?: number;
    numberofDolls?: number;
    dollWod?: number;
    level?: number;
    upgradeWodID?: number;
    downgradeWodID?: number;
    costComponent1?: number;
    costComponent6?: number;
    skillUnlockID?: number;
    researchLocked?: number;
    costComponent3?: number;
    costComponent8?: number;
    costComponent2?: number;
    costComponent7?: number;
    costComponent5?: number;
    costComponent4?: number;
    isYardTool?: number;
    effects?: string;
    unitWallCount?: number;
    role?: string;
    healingCostC1?: number;
    healingCostC2?: number;
    skipCostC2?: number;
    healingTime?: number;
    reviveAllCostC2?: number;
    foodSupply?: number;
    meleeAttack?: number;
    rangeAttack?: number;
    meleeDefence?: number;
    rangeDefence?: number;
    mightValue?: number;
    fameAsDef?: number;
    healingOrder?: number;
    kingdomTravellingCost?: number;
    hybrid?: number;
    fameAsOff?: number;
    palaceLockedByKID?: number;
    fireBoost?: number;
    isAuxiliary?: number;
    factionID?: number;
    isKamikaze?: number;
    meadSupply?: number;
}

export interface Version {
    versionsnr: string;
}

export interface VersionInfo {
    version: string;
    date: string;
    included: { features: string };
}

export interface Village {
    kID: number,
    wallWodId: number,
    gateWodId: number,
    keepWodId: number,
    moatWodId: number,
    unitWallCount: number,
    peasants: number,
    guards: number,
    productivityWoodBoost: number,
    productivityStoneBoost: number,
    productivityFoodBoost: number
}

export interface VIPLevel {
    vipLevelID: number;
    thresholdMin: number;
    thresholdMax: number;
    woodBoosts: string;
    stoneBoosts: string;
    bonusLoginKeys: number;
    foodBoosts?: string;
    attackSpeedBoost?: number;
    attackFameBoost?: number;
    taxCollectorBoost?: number;
    productionBonusSlots?: number;
    recruitmentBonusSlots?: number;
    freePremiumGeneralsPerDay?: number;
    magicFindBoost?: number;
    taxCollectorNoRubies12?: number;
    taxCollectorNoRubies24?: number;
}

export interface WelcomeBackReward {
    welcomeBackRewardID: number;
    comment1: string;
    comment2: string;
    minLevel: number;
    maxLevel?: number;
    minInactiveDays: number;
    maxInactiveDays?: number;
    rewardIDs: string;
}

export interface WishingWell {
    wodID: number;
    name: string;
    group: string;
    rotateType: number;
    destructable: number;
    tempServerDestructable: number;
    upgradeWodID?: number;
    level: number;
    type: string;
    width: number;
    height: number;
    requiredLevel: number;
    disabledOnAllianceBattleGrounds: number;
    downgradeWodID?: number;
    costWood?: number;
    costStone?: number;
    xp?: number;
    waitingTime?: number;
    entryCosts?: number;
    costWishingWellCoin?: number;
    costC2?: number;
}

export interface Wod {
    wodID: number;
    group: string;
    name: string;
    type: string;
    kIDs?: string | number;
    server?: number;
    block?: number;
    width?: number;
    height?: number;
}

export interface WorldmapSkin {
    skinID: number;
    name: string;
    definesMoat?: number;
    definesAllCastleLevels?: number;
    definesResources?: number;
}

///endregion

///region Images
export interface ImagesData {
    [key: string]: ImageData,
}

export interface ImageData {
    pid: number,
    url: string,
    frames: ImageFrameData[],
    fx: ImageFxData[],
}

export interface ImageFrameData {
    x: number,
    y: number,
    w: number,
    h: number,
    rx: number,
    ry: number,
}

export interface ImageFxData {
    x: number,
    y: number,
    scale: number,
    name: string,
    rotation: number,
}

///endregion

///region Languages
export interface Languages {
    da: Language,
    de: Language,
    el: Language,
    en: Language,
    es: Language,
    fi: Language,
    fr: Language,
    it: Language,
    js: Language,
    ko: Language,
    nl: Language,
    no: Language,
    pl: Language,
    pt: Language,
    ru: Language,
    sv: Language,
    tr: Language,
    zh_CN: Language,
    zh_TW: Language,
}

export interface Language {
    Research: { [key: string]: string },
    achievements: { [key: string]: string },
    alerts_and_errors: { [key: string]: string },
    buildings_and_decorations: { [key: string]: string },
    dialogs: { [key: string]: string },
    effects: { [key: string]: string },
    equipment_heroes_and_gems: { [key: string]: string },
    generic: { [key: string]: string },
    help: { [key: string]: string },
    playertitles: { [key: string]: string },
    pushnotifcations_android: { [key: string]: string },
    pushnotifications: { [key: string]: string },
    pushnotifications_ios: { [key: string]: string },
    quests: { [key: string]: string },
    tooltips: { [key: string]: string },
    units_and_tools: { [key: string]: string },
    generic_flash: {
        Footer: { [key: string]: string },
        alert: { [key: string]: string },
        button: { [key: string]: string },
        chat: { [key: string]: string },
        cm_teaser: { [key: string]: string },
        common: { [key: string]: string },
        composites: { [key: string]: string },
        country: { [key: string]: string },
        currency: { [key: string]: string },
        error: { [key: string]: string },
        format_time: { [key: string]: string },
        friends: { [key: string]: string },
        fullscreen: { [key: string]: string },
        korea: { [key: string]: string },
        labels: { [key: string]: string },
        languages: { [key: string]: string },
        login: { [key: string]: string },
        logout: { [key: string]: string },
        native_dialogs: { [key: string]: string },
        notification: { [key: string]: string },
        password: { [key: string]: string },
        payment: { [key: string]: string },
        progressbar: { [key: string]: string },
        register: { [key: string]: string },
        report: { [key: string]: string },
        worlds: { [key: string]: string },
    },
}

///endregion

///region Network
export interface Network {
    versionNo: number,
    deployTime: number,
    is_approval: boolean,
    instances: { instance: NetworkInstance[] },
    "test-instances"?: { instance: NetworkInstance[] },
    general: {
        defaultinstance: number,
        allowedfullscreen: boolean,
        networkname: string,
        usekeybaselogin: boolean,
        networkbuddies: boolean,
        enablefeedmessages: boolean,
        enablelonelycow: boolean,
        requestpaybyjs: boolean,
        earncredits: number,
        useexternallinks: boolean,
        invitefriends: boolean,
        maxusernamelength: number,
        usepayment: boolean,
        showversion: boolean,
        replaceUrlPatternForWebSocket: boolean,
        useWebSocket: boolean,
        webSocketProtocol: string
    }
}

export interface NetworkInstance {
    value: number,
    server: string,
    port: number,
    zone: string
    zoneId: number,
    instanceName: number,
    isFavorite: 0 | 1,
    instanceLocaId: string,
    isPriority: 0 | 1,
    isInternational: 0 | 1,
    countries: string[],
    defaultcountry?: string,
}

///endregion