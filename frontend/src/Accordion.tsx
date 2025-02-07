import React, { useState } from "react";
import { Collapse } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
interface MyComponentProps {
  service: {
    key: string;
    heading: string;
    qa: { key: string; heading: string; text: (string | string[])[] }[];
  };
}
const Accordion: React.FC<MyComponentProps> = ({ service }) => {
  const [activePanelKeys, setActivePanelKeys] = useState<string[]>([]);
  const [activeChildPanelKeys, setChildActivePanelKeys] = useState<string[]>(
    []
  );

  const handlePanelIconClick = (panelKey: string, makeActive: boolean) => {
    if (makeActive) {
      setActivePanelKeys([...activePanelKeys, panelKey]);
    } else {
      setActivePanelKeys(activePanelKeys.filter((aPK) => aPK !== panelKey));
      setChildActivePanelKeys([]);
    }
  };
  const handleChildPanelIconClick = (panelKey: string, makeActive: boolean) => {
    if (makeActive) {
      setChildActivePanelKeys([...activeChildPanelKeys, panelKey]);
    } else {
      setChildActivePanelKeys(
        activeChildPanelKeys.filter((aPK) => aPK !== panelKey)
      );
    }
  };

  return (
    <div className="accordionClass w-full font-semibold">
      <Collapse
        activeKey={activePanelKeys}
        expandIconPosition="right"
        expandIcon={() => <DownOutlined />}
        onChange={(e) => setActivePanelKeys(e)}
      >
        <Panel
          header={service.heading.toUpperCase()}
          key={service.key}
          showArrow={activePanelKeys.indexOf(service.key) === -1}
        >
          <div className="accordionClassChild space-y-3">
            {service.qa.map((child) => (
              <Collapse
                activeKey={activeChildPanelKeys}
                expandIconPosition="right"
                expandIcon={() => <DownOutlined />}
                onChange={(e) => setChildActivePanelKeys(e)}
              >
                <Panel
                  header={child.heading}
                  key={child.key}
                  showArrow={
                    activeChildPanelKeys.indexOf(String(child.key)) === -1
                  }
                >
                  <div className="text-md sm:text-lg space-y-7 text-slate-200">
                    {child.text.map((subText) =>
                      typeof subText === "string" ? (
                        <p>{subText}</p>
                      ) : (
                        subText.map((t) => (
                          <p className="italic flex flex-col justify-center items-center space-y-0">
                            {t}
                          </p>
                        ))
                      )
                    )}
                  </div>
                  {activeChildPanelKeys.indexOf(String(child.key)) !== -1 && (
                    <div style={{ textAlign: "right", marginTop: 10 }}>
                      <UpOutlined
                        onClick={() =>
                          handleChildPanelIconClick(String(child.key), false)
                        }
                        style={{ fontSize: "20px" }}
                      />
                    </div>
                  )}
                </Panel>
              </Collapse>
            ))}
          </div>
          {activePanelKeys.indexOf(service.key) !== -1 && (
            <div style={{ textAlign: "right", marginTop: 10 }}>
              <UpOutlined
                onClick={() => handlePanelIconClick(service.key, false)}
                style={{ fontSize: "20px" }}
              />
            </div>
          )}
        </Panel>
      </Collapse>
    </div>
  );
};
export default Accordion;
