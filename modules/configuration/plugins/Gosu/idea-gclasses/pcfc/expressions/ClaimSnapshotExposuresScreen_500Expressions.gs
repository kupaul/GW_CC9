package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotExposuresScreen.500.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposuresScreen_500Expressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotExposuresScreen.500.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposuresScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get SnapshotParam () : dynamic.Dynamic {
      return getRequireValue("SnapshotParam", 0) as dynamic.Dynamic
    }
    
    property set SnapshotParam ($arg :  dynamic.Dynamic) {
      setRequireValue("SnapshotParam", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotExposuresScreen.500.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Reserves) at ClaimSnapshotExposuresScreen.500.pcf: line 50, column 44
    function valueRoot_20 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TextCell (id=Number) at ClaimSnapshotExposuresScreen.500.pcf: line 31, column 44
    function valueRoot_9 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextCell (id=Type) at ClaimSnapshotExposuresScreen.500.pcf: line 36, column 44
    function value_10 () : dynamic.Dynamic {
      return Exposure.ExposureType
    }
    
    // 'value' attribute on TextCell (id=Coverage) at ClaimSnapshotExposuresScreen.500.pcf: line 41, column 44
    function value_13 () : dynamic.Dynamic {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextCell (id=Claimant) at ClaimSnapshotExposuresScreen.500.pcf: line 45, column 69
    function value_16 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on TextCell (id=Reserves) at ClaimSnapshotExposuresScreen.500.pcf: line 50, column 44
    function value_18 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on TextCell (id=FuturePayments) at ClaimSnapshotExposuresScreen.500.pcf: line 55, column 44
    function value_21 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on TextCell (id=TotalPayments) at ClaimSnapshotExposuresScreen.500.pcf: line 60, column 44
    function value_24 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on TextCell (id=Number) at ClaimSnapshotExposuresScreen.500.pcf: line 31, column 44
    function value_7 () : dynamic.Dynamic {
      return Exposure.ClaimOrder
    }
    
    property get Exposure () : dynamic.Dynamic {
      return getIteratedValue(2) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotExposuresScreen.500.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ClaimSnapshotExposuresScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_onEnter_28 (def :  pcf.ClaimSnapshotExposure500DV_Baggage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_onEnter_30 (def :  pcf.ClaimSnapshotExposure500DV_BodilyInjuryDamage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_onEnter_32 (def :  pcf.ClaimSnapshotExposure500DV_GeneralDamage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_onEnter_34 (def :  pcf.ClaimSnapshotExposure500DV_LossOfUseDamage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_onEnter_36 (def :  pcf.ClaimSnapshotExposure500DV_PIPDamages) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_onEnter_38 (def :  pcf.ClaimSnapshotExposure500DV_PersonalPropertyDamage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_onEnter_40 (def :  pcf.ClaimSnapshotExposure500DV_PropertyDamage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_onEnter_42 (def :  pcf.ClaimSnapshotExposure500DV_TowOnly) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_onEnter_44 (def :  pcf.ClaimSnapshotExposure500DV_VehicleDamage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 77, column 77
    function def_onEnter_47 (def :  pcf.ClaimSnapshotExposureWageBenefits500DV) : void {
      def.onEnter(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 85, column 48
    function def_onEnter_50 (def :  pcf.ClaimSnapshotExposureReplacementServices500DV) : void {
      def.onEnter(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 92, column 84
    function def_onEnter_54 (def :  pcf.ClaimSnapshotExposuresVocationalBenefits500DV) : void {
      def.onEnter(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 99, column 78
    function def_onEnter_57 (def :  pcf.ClaimSnapshotExposureDeathBenefits500DV) : void {
      def.onEnter(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_refreshVariables_29 (def :  pcf.ClaimSnapshotExposure500DV_Baggage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_refreshVariables_31 (def :  pcf.ClaimSnapshotExposure500DV_BodilyInjuryDamage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_refreshVariables_33 (def :  pcf.ClaimSnapshotExposure500DV_GeneralDamage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_refreshVariables_35 (def :  pcf.ClaimSnapshotExposure500DV_LossOfUseDamage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_refreshVariables_37 (def :  pcf.ClaimSnapshotExposure500DV_PIPDamages) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_refreshVariables_39 (def :  pcf.ClaimSnapshotExposure500DV_PersonalPropertyDamage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_refreshVariables_41 (def :  pcf.ClaimSnapshotExposure500DV_PropertyDamage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_refreshVariables_43 (def :  pcf.ClaimSnapshotExposure500DV_TowOnly) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function def_refreshVariables_45 (def :  pcf.ClaimSnapshotExposure500DV_VehicleDamage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 77, column 77
    function def_refreshVariables_48 (def :  pcf.ClaimSnapshotExposureWageBenefits500DV) : void {
      def.refreshVariables(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 85, column 48
    function def_refreshVariables_51 (def :  pcf.ClaimSnapshotExposureReplacementServices500DV) : void {
      def.refreshVariables(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 92, column 84
    function def_refreshVariables_55 (def :  pcf.ClaimSnapshotExposuresVocationalBenefits500DV) : void {
      def.refreshVariables(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 99, column 78
    function def_refreshVariables_58 (def :  pcf.ClaimSnapshotExposureDeathBenefits500DV) : void {
      def.refreshVariables(SelectedExposure)
    }
    
    // 'mode' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 70, column 56
    function mode_46 () : java.lang.Object {
      return SelectedExposure.ExposureType.Code
    }
    
    // 'mode' attribute on PanelRef at ClaimSnapshotExposuresScreen.500.pcf: line 85, column 48
    function mode_52 () : java.lang.Object {
      return ClaimSnapshotExposure500DV
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposuresScreen.500.pcf: line 31, column 44
    function sortValue_0 (Exposure :  dynamic.Dynamic) : java.lang.Object {
      return Exposure.ClaimOrder
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposuresScreen.500.pcf: line 36, column 44
    function sortValue_1 (Exposure :  dynamic.Dynamic) : java.lang.Object {
      return Exposure.ExposureType
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposuresScreen.500.pcf: line 41, column 44
    function sortValue_2 (Exposure :  dynamic.Dynamic) : java.lang.Object {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposuresScreen.500.pcf: line 45, column 69
    function sortValue_3 (Exposure :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposuresScreen.500.pcf: line 50, column 44
    function sortValue_4 (Exposure :  dynamic.Dynamic) : java.lang.Object {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposuresScreen.500.pcf: line 55, column 44
    function sortValue_5 (Exposure :  dynamic.Dynamic) : java.lang.Object {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposuresScreen.500.pcf: line 60, column 44
    function sortValue_6 (Exposure :  dynamic.Dynamic) : java.lang.Object {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposuresScreen.500.pcf: line 24, column 39
    function value_27 () : dynamic.Dynamic {
      return SnapshotParam.Exposures
    }
    
    // 'visible' attribute on Card (id=WageBenefits) at ClaimSnapshotExposuresScreen.500.pcf: line 75, column 82
    function visible_49 () : java.lang.Boolean {
      return SelectedExposure.ExposureType.Code == "PIPDamages"
    }
    
    property get SelectedExposure () : dynamic.Dynamic {
      return getCurrentSelection(1) as dynamic.Dynamic
    }
    
    property set SelectedExposure ($arg :  dynamic.Dynamic) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}