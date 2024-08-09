import "./product.component.scss";

import { useEffect, useState } from "react";
import DropDown from "../../components/dropdown/dropdown.component";
import Input from "../../components/input/input.component";
import Switch from "../../components/switch/switch.component";
import Panel from "../../components/panel/panel.component";
import CheckBox from "../../components/checkbox/checkbox.component";
import Label from "../../components/label/label.component";
import Button from "../../components/button/button.component";
import {
  CircleCheckIcon,
  Layers2Icon,
  ReplaceIcon,
  SettingsIcon,
} from "lucide-react";
import useWindowDimensions from "../../hooks/useWindowDimensions.hook.jsx";
import useCrud from "../../hooks/useCrud.jsx";

export default function Product() {
  const { handleChange, state } = useCrud({
    initialState: {
      description: "Chicken Burger CMA",
      reportCategory: "Burgers",
      productType: "Food",
      sellingPrice: 0,
      manualPrice: false,
      concept: "All Concepts",
      defaultUnit: "Post",
      recipeUsageUnit: "Port",
      conversionDefRecipe: 5,
      settings: [
        { id: 1, description: "Sales Taxes", value: "VAT" },
        { id: 2, description: "Purchasing Taxes", value: "VAT" },
        { id: 3, description: "Question Group", value: "NONE" },
        { id: 4, description: "Print Channels", value: "NONE" },
        { id: 5, description: "Stock Polling", value: "STOCK POLLING" },
        { id: 6, description: "Course Type", value: "NONE" },
      ],
      barcodes: [
        { id: 1, description: "29823219843514651" },
        { id: 2, description: "29823219843514651" },
      ],

      productCost: {
        lastOrderOn: "Never",
        lastOrderQty: 0,
        fromSupplier: "Aramex",
        avgCost: "Never",
        lastCost: 0,
      },
    },
    endpoint: "products",
  });

  const [options, setOptions] = useState({
    description: ["Beef Burger CMA", "Chicken Burger CMA", "Fish Burger CMA"],
    reportCategories: ["Burgers", "Pizza", "Sandwiches", "Salads"],
    productTypes: ["Food", "Beverages", "Tobacco"],
    units: ["Post", "Port"],
    concepts: ["All Concepts", "Concept 1", "Concept 2", "Concept 3"],
  });

  const { isMobile } = useWindowDimensions();

  useEffect(() => {
    console.log("STATE: ", state);
    console.log("OPTIONS: ", options);
  }, [state]);

  return (
    <div className={`product-container ${isMobile ? "mobile" : ""}`}>
      <div className="product-container-column">
        <DropDown
          label="Product Description"
          value={state.description}
          options={options.description}
          onChange={handleChange("description")}
          editable
        />
        <DropDown
          label="Report Category"
          value={state.reportCategory}
          options={options.reportCategories}
          onChange={handleChange("reportCategory")}
          editable
        />
        <DropDown
          label="Product Type"
          value={state.productType}
          options={options.productTypes}
          onChange={handleChange("productType")}
          editable
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
            gap: "12px",
          }}
        >
          <Input
            label="Selling Price"
            value={state.sellingPrice}
            type="number"
            onChange={handleChange("sellingPrice", "number")}
            style={{ flex: 1 }}
            disabled={!state.manualPrice}
          />
          <Panel style={{ flex: 1 }}>
            <Switch
              checked={state.manualPrice}
              onClick={() => {
                handleChange("manualPrice")({
                  value: !state.manualPrice,
                });
              }}
            />
            Manual Price?
          </Panel>
        </div>

        <Panel>
          <Switch
            checked={state.regularItem}
            onClick={() => {
              handleChange("regularItem")({
                value: !state.regularItem,
              });
            }}
          />
          Regular Item &nbsp;&nbsp;
          <Switch
            checked={state.keyboardItem}
            onClick={() => {
              handleChange("keyboardItem")({
                value: !state.keyboardItem,
              });
            }}
          />
          Keyboard Item
        </Panel>

        <DropDown
          label="Default Unit**"
          value={state.defaultUnit}
          options={options.units}
          onChange={handleChange("defaultUnit")}
          editable
        />

        <DropDown
          label="Recipe Usage Unit"
          value={state.recipeUsageUnit}
          options={options.units}
          onChange={handleChange("recipeUsageUnit")}
          editable
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
            gap: "12px",
          }}
        >
          <Input
            label="Conversion def / recipe"
            value={state.conversionDefRecipe}
            type="number"
            style={{ flex: 1 }}
            onChange={handleChange("conversionDefRecipe", "number")}
          />
          <Panel style={{ flex: 1, justifyContent: "center" }}>
            1 Post {">>>>>"} {state.conversionDefRecipe} Port
          </Panel>
        </div>

        <Panel
          variant="outlined"
          style={{
            flexDirection: "column",
            alignItems: "start",
            padding: "16px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              marginBottom: "12px",
              gap: isMobile ? "8px" : "",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                flex: 1,
              }}
            >
              <CheckBox
                value={state.isActive}
                onClick={() => {
                  handleChange("isActive")({
                    value: !state.isActive,
                  });
                }}
                label="Is Active"
              />
              <CheckBox
                value={state.isSoldItem}
                onClick={() => {
                  handleChange("isSoldItem")({
                    value: !state.isSoldItem,
                  });
                }}
                label="Is Sold Item?"
              />
              <CheckBox
                value={state.productHasStock}
                onClick={() => {
                  handleChange("productHasStock")({
                    value: !state.productHasStock,
                  });
                }}
                label="Product Has Stock"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                flex: 1,
              }}
            >
              <CheckBox
                value={state.isModifier}
                onClick={() => {
                  handleChange("isModifier")({
                    value: !state.isModifier,
                  });
                }}
                label="Is Modifier?"
              />
              <CheckBox
                value={state.useInRecipes}
                onClick={() => {
                  handleChange("useInRecipes")({
                    value: !state.useInRecipes,
                  });
                }}
                label="Use In Recipes?"
              />
              <CheckBox
                value={state.hideFromStockAndPu}
                onClick={() => {
                  handleChange("hideFromStockAndPu")({
                    value: !state.hideFromStockAndPu,
                  });
                }}
                label="Hide From Stock & Pu"
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <CheckBox
              value={state.isTimedProduct}
              onClick={() => {
                handleChange("isTimedProduct")({
                  value: !state.isTimedProduct,
                });
              }}
              label="Is Timed Products? (Item is sold per hour)"
            />
            <CheckBox
              value={state.serverOnlyProduct}
              onClick={() => {
                handleChange("serverOnlyProduct")({
                  value: !state.serverOnlyProduct,
                });
              }}
              label="Server Only Product (Used only in multi-branch business)"
            />
          </div>
        </Panel>

        <Panel
          style={
            isMobile
              ? { display: "flex", flexDirection: "column" }
              : {
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridTemplateRows: "repeat(2, 100px)",
                  gap: "8px",
                }
          }
        >
          <Panel
            variant="dark button"
            style={{
              gridColumn: "1 / span 1",
              gridRow: "1 / span 1",
              alignSelf: "stretch",
              justifySelf: "stretch",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Product Recipe F4
          </Panel>
          <Panel
            variant="dark button"
            style={{
              gridColumn: "1 / span 1",
              gridRow: "2 / span 1",
              alignSelf: "stretch",
              justifySelf: "stretch",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Used in Recipes F5
          </Panel>
          <Panel
            variant="accent button"
            style={{
              gridColumn: "2 / span 1",
              gridRow: "1 / span 2",
              alignSelf: "stretch",
              justifySelf: "stretch",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "1.2rem",
            }}
          >
            Checking Burger CMA
          </Panel>
          <Panel
            variant="dark button"
            style={{
              gridColumn: "3 / span 1",
              gridRow: "1 / span 1",
              alignSelf: "stretch",
              justifySelf: "stretch",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Manager Product's permissions
          </Panel>
          <Panel
            variant="dark button"
            style={{
              gridColumn: "3 / span 1",
              gridRow: "2 / span 1",
              alignSelf: "stretch",
              justifySelf: "stretch",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Product Pictures
          </Panel>
        </Panel>
      </div>
      <div className="product-container-column">
        <DropDown
          label="Concept"
          value={state.concept}
          onChange={handleChange("concept")}
          options={options.concepts}
          editable
        />

        <Label label="Barcode Settings">
          <Panel style={{ padding: "16px", flexDirection: "column" }}>
            {state.barcodes.map((barcode, index) => {
              return (
                <div
                  key={barcode.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "end",
                    gap: "12px",
                    width: "100%",
                  }}
                >
                  <Input
                    label={`Barcode ${barcode.id}`}
                    value={barcode.description}
                    style={{ flex: 1 }}
                    onChange={handleChange(`barcodes.${index}.description`)}
                  />
                  <Panel
                    variant="dark"
                    style={{ flex: 1, paddingLeft: "12px" }}
                  >
                    More Barcodes
                  </Panel>
                </div>
              );
            })}
          </Panel>
        </Label>

        <Label label="Product Settings">
          <Panel
            variant="outlined"
            style={{ flexDirection: "column", padding: "16px" }}
          >
            {state.settings.map((setting) => (
              <ProductSetting setting={setting} />
            ))}
          </Panel>
        </Label>

        <Label label="Product Cost">
          <Panel
            variant="outlined"
            style={{
              flexDirection: "column",
              alignItems: "start",
              padding: "16px",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                flexWrap: "wrap",
                height: isMobile ? "" : "121px",
                gap: "8px",
              }}
            >
              <Input
                variant="small"
                label="Last Order On"
                style={isMobile ? { width: "100%" } : {}}
                value={state.productCost.lastOrderOn}
                onChange={handleChange("productCost.lastOrderOn")}
              />
              <Input
                variant="small"
                label="Last Order QTY"
                type="number"
                style={isMobile ? { width: "100%" } : {}}
                value={state.productCost.lastOrderQty}
                onChange={handleChange("productCost.lastOrderQty", "number")}
              />
              <Input
                variant="small"
                label="From Supplier"
                style={isMobile ? { width: "100%" } : {}}
                value={state.productCost.fromSupplier}
                onChange={handleChange("productCost.fromSupplier")}
              />
              <Input
                variant="small"
                label="AVG Cost"
                style={isMobile ? { width: "100%" } : {}}
                value={state.productCost.avgCost}
                onChange={handleChange("productCost.avgCost")}
              />
              <Input
                variant="small"
                label="Last Cost"
                style={isMobile ? { width: "100%" } : {}}
                value={state.productCost.lastCost}
                onChange={handleChange("productCost.lastCost")}
              />
            </div>

            <Button
              style={{
                width: isMobile ? "100%" : "calc(50% - 8px)",
              }}
            >
              EDIT COST
            </Button>
            <span style={{ color: "var(--accent-color)" }}>
              All Costs are TAX Excluded | All Costs are in LBP
            </span>
          </Panel>
        </Label>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "8px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              flex: 1,
            }}
          >
            <Panel
              variant="accent icon button"
              icon={<Layers2Icon />}
              style={{ flex: 1, fontSize: "1rem" }}
            >
              DUPLICATE
            </Panel>
            <Panel
              variant="accent icon button"
              icon={<ReplaceIcon />}
              style={{ flex: 1, fontSize: "1rem" }}
            >
              REPLACE
            </Panel>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              flex: 1,
            }}
          >
            <Panel
              variant="dark icon button"
              icon={<SettingsIcon />}
              style={{ flex: 1, zIndex: 1, fontSize: "1rem" }}
            >
              EDIT
            </Panel>
            <Panel
              variant="icon button"
              icon={<CircleCheckIcon />}
              style={{
                flex: 1,
                marginLeft: "-1rem",
                paddingRight: "1rem",
                fontSize: "1rem",
              }}
            >
              NEW
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductSetting({ setting }) {
  return (
    <div className="setting-container">
      <Button style={{ width: "60px" }}>EDIT</Button>
      <span className="setting-description">{setting.description}</span>
      <span className="setting-value">{setting.value}</span>
    </div>
  );
}
